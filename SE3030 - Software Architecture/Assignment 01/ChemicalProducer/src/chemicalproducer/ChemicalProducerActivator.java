package chemicalproducer;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceRegistration;

import com.lab.ChemicalProducer.ChemicalProducer;
import com.lab.ChemicalProducer.ChemicalProducerIMP;

public class ChemicalProducerActivator implements BundleActivator {

	private static BundleContext context;
	private ServiceRegistration chemicalReg;

	static BundleContext getContext() {
		return context;
	}

	public void start(BundleContext bundleContext) throws Exception {
		
		
		System.out.println(" Chemical Producer Started !");
		
		ChemicalProducerActivator.context = bundleContext;
		
		ChemicalProducer chemical = new ChemicalProducerIMP();
		chemicalReg = bundleContext.registerService(ChemicalProducer.class.getName(), chemical, null);
		
	}

	public void stop(BundleContext bundleContext) throws Exception {
		
		System.out.println(" Chemical Producer Stoped !");
		ChemicalProducerActivator.context = null;
		chemicalReg.unregister();
	}


}
