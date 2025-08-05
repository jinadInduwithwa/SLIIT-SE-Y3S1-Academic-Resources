package Junit;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;

public class CalculationTest2 {

	@Test
    public void testAddition() {
        int a = 10;
        int b = 10;
        int expectedResult = 35;
        int result = Calculation.addition(a, b);
        Assert.assertNotEquals(expectedResult, result);
    }

    @Test
    public void testSubtraction() {
        int x = 10;
        int y = 5;
        int expectedResult = 10;
        int result = Calculation.subtraction(x, y);
        Assert.assertNotEquals(expectedResult, result);
    }

}
