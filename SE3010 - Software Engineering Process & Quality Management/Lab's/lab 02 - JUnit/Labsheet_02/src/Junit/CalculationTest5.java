package Junit;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;

public class CalculationTest5 {

	@Test
	public void testAddition() {
		int a = 1000000;
	     int b = 1000000;
	     int expectedResult = 2000000;
	     int result = Calculation.addition(a, b);
	     Assert.assertEquals(expectedResult, result);
	}

	@Test
	public void testSubtraction() {
		int a = 1000000;
        int b = -999999;
        int expectedResult = 1;
        int result = Calculation.addition(a, b);
        Assert.assertEquals(expectedResult, result);
	}

}
