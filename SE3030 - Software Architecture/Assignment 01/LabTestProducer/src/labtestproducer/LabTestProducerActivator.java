package labtestproducer;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceRegistration;

import com.lab.LabTestProducer.LabTestProducer;
import com.lab.LabTestProducer.LabTestProducerIMP;

public class LabTestProducerActivator implements BundleActivator {

	private static BundleContext context;
	private ServiceRegistration testReg;

	static BundleContext getContext() {
		return context;
	}

	public void start(BundleContext bundleContext) throws Exception {
		LabTestProducerActivator.context = bundleContext;
		
		System.out.println("LabTest Producer Started !!!");
		
		LabTestProducer labTest = new LabTestProducerIMP();
		testReg = bundleContext.registerService(LabTestProducer.class.getName(),labTest, null);
		
	}

	public void stop(BundleContext bundleContext) throws Exception {
		
		System.out.println("LabTest Producer Stoped !!!");
		LabTestProducerActivator.context = null;
		testReg.unregister();
	}

}
