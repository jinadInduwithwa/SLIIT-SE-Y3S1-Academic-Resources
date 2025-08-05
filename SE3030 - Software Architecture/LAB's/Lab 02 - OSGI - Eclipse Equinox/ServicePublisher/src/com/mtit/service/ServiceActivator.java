package com.mtit.service;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceRegistration;

public class ServiceActivator implements BundleActivator {

	ServiceRegistration publishServiceRegostration;

	
	public void start(BundleContext context) throws Exception {
		System.out.println("Publisher Start");
		ServicePublish publishService = new ServicePublishImpl();
		
		publishServiceRegostration = context.registerService(ServicePublish.class.getName(), publishService, null);
	}

	public void stop(BundleContext bundleContext) throws Exception {
		System.out.println("Publisher Stop");
		publishServiceRegostration.unregister();
	}

}
