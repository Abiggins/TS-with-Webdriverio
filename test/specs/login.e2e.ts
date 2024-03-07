import { SignUpPage } from '../pageobjects/signup.page.ts'
import {Ui} from '../pageobjects/page.ts'
import { LoginPage } from '../pageobjects/login.page.ts'


const ui = new Ui();
const signupPage = new SignUpPage();
const loginPage = new LoginPage();

describe('My Login application', () => {
    it('Test Case 1: Register User', async () => {
        // Given I am on the login page
        await ui.open(loginPage.url)

//        //And I click on the Register link and fill in the form

        await loginPage.signUp('Andrew', 'Test@Test.com');
        await signupPage.acceptTermsandConditions();
//        await SignupPage.additonalInformation('FirstName', 'LastName', 'Address', 'City', 'State', 'ZipCode', 'Phone');
//
//        //When I click on the submit button
//        await SignupPage.submit();
//
//        //Then I should see the success message
//        expect(SignupPage.successMessage).toBeDisplayed();
 
        })
})
