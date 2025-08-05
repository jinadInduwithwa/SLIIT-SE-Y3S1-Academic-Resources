package appointmentproducer;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceRegistration;

import com.lab.AppointmentProducer.AppointmentProducer;
import com.lab.AppointmentProducer.AppointmentProducerIMP;

public class AppointmentProducerActivator implements BundleActivator {

	private static BundleContext context;

	static BundleContext getContext() {
		return context;
	}
	
	private ServiceRegistration appointmentReg;

	public void start(BundleContext bundleContext) throws Exception {
		System.out.println("Appointment Producer Started ");
		AppointmentProducerActivator.context = bundleContext;
		
		AppointmentProducer appointment = new AppointmentProducerIMP();
		
		appointmentReg = bundleContext.registerService(AppointmentProducer.class.getName(), appointment, null);
	}

	public void stop(BundleContext bundleContext) throws Exception {
		AppointmentProducerActivator.context = null;
		
		System.out.println("Appointment Producer Stop ");
		  appointmentReg.unregister();
	}


}
