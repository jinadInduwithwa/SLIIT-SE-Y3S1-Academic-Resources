package com.mtit.osgi.helloservice;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

public class Activator implements BundleActivator {

	public void start(BundleContext bundleContext) throws Exception {
		System.out.println("Start MTIT OSGI Service");
	}

	public void stop(BundleContext bundleContext) throws Exception {
		System.out.println("Stop MTIT OSGI Service");
	}

}
