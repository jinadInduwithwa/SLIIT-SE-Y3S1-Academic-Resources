package Junit;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;

public class CalculationTest3 {

	@Test
    public void testAddition() {
        int a = -15;
        int b = 20;
        int expectedResult = 5;
        int result = Calculation.addition(a, b);
        Assert.assertEquals(expectedResult, result);
    }

    @Test
    public void testSubtraction() {
        int x = -10;
        int y = 5;
        int expectedResult = -15;
        int result = Calculation.subtraction(x, y);
        Assert.assertEquals(expectedResult, result);
    }

}
