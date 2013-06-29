/**
 * Created with IntelliJ IDEA.
 * User: upgundecha
 * Date: 02/05/13
 * Time: 10:37 PM
 * To change this template use File | Settings | File Templates.
 */

package bmicalculator.test;

import java.net.URL;
import java.text.MessageFormat;

import cucumber.annotation.*;
import cucumber.annotation.en.*;
import static org.junit.Assert.assertEquals;

import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;


public class Bmi_Calculator_Step_Defs {

    private WebDriver driver;


    @Before("@local")
    public void setUpLocal()  throws Throwable
    {
        //Setup for running Appium test in local environment
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(CapabilityType.BROWSER_NAME, "iOS");
        capabilities.setCapability(CapabilityType.VERSION, "6.1");
        capabilities.setCapability(CapabilityType.PLATFORM, "Mac");
        capabilities.setCapability("app", "/Users/upgundecha/Desktop/AppExamples/BmiCalculator/build/Release-iphonesimulator/BmiCalculator.app");

        //Create an instance of RemoteWebDriver and connect to the Appium server.
        //Appium will launch the BmiCalc App in iPhone Simulator using the configurations specified in Desired Capabilities
        driver = new RemoteWebDriver(new URL("http://0.0.0.0:4723/wd/hub"), capabilities);
    }

    @Before("@ios-sauce")
    public void setUpiOS()  throws Throwable
    {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(CapabilityType.VERSION, "6.1");
        capabilities.setCapability(CapabilityType.PLATFORM, "Mac");
        capabilities.setCapability("app", "sauce-storage:my_ios_app.zip");
        capabilities.setCapability("device", "iPhone Simulator");
        String sauceUserName = System.getenv("SAUCE_USER_NAME");
        String sauceAccessKey = System.getenv("SAUCE_ACCESS_KEY");

        System.out.println(sauceUserName);

        //Create an instance of RemoteWebDriver and connect to the Appium server.
        //Appium will launch the BmiCalc App in iPhone Simulator using the configurations specified in Desired Capabilities
        driver = new RemoteWebDriver(new URL(MessageFormat.format("http://{0}:{1}@ondemand.saucelabs.com:80/wd/hub", sauceUserName, sauceAccessKey)), capabilities);
    }

    @Before("@android-sauce")
    public void setUpAndroid()  throws Throwable
    {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
        capabilities.setCapability("app", "sauce-storage:my_android_app.zip");
        capabilities.setCapability("device", "Android");
        capabilities.setCapability("version", "4.2");
        capabilities.setCapability("app-package", "com.testomatic.android.bmicalculator");
        capabilities.setCapability("app-activity", "BMICalculatorActivity");

        //Create an instance of RemoteWebDriver and connect to the Appium server.
        //Appium will launch the BmiCalc App in iPhone Simulator using the configurations specified in Desired Capabilities
        driver = new RemoteWebDriver(new URL(MessageFormat.format("http://{0}:{1}@ondemand.saucelabs.com:80/wd/hub", "upgundecha", "c6e7132c-ae27-4217-b6fa-3cf7df0a7281")), capabilities);
    }


    @Given("^I enter \"([^\"]*)\" as height$")
    public void I_enter_as_height(String height) throws Throwable {
        WebElement heightTextField = driver.findElement(By.name("Height"));
        heightTextField.sendKeys(height);

    }

    @Then("^I enter \"([^\"]*)\" as weight$")
    public void I_enter_as_weight(String weight) throws Throwable {
        WebElement weightTextField = driver.findElement(By.name("Weight"));
        weightTextField.sendKeys(weight);
    }

    @Then("^I press the Calculate button$")
    public void I_press_the_Calculate_button() throws Throwable {
        WebElement calculateButton =  driver.findElement(By.name("Calculate"));
        calculateButton.click();
    }


    @Then("^I should see \"([^\"]*)\" as bmi and \"([^\"]*)\" as category$")
    public void I_should_see_as_bmi_and_Normal_as_category(String bmi, String category) throws Throwable {

        WebElement bmilabel = driver.findElement(By.name("bmi"));
        WebElement bmiCategorylabel = driver.findElement(By.name("category"));

        //Check the calculated Bmi and Category displayed
        assertEquals(bmi,bmilabel.getText());
        assertEquals(category,bmiCategorylabel.getText());
    }

    @After
    public void tearDown()
    {
        driver.quit();
    }
}



