package Junit;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ CalculationTest.class, CalculationTest2.class, CalculationTest3.class, CalculationTest4.class,
		CalculationTest5.class })
public class AllTests {

}
