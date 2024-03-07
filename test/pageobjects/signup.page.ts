import {Ui} from './page.ts';

export class SignUpPage extends Ui {
    
    accountName = 'input[data-qa="name"]'
    email = 'input[data-qa="email"]'
    password = 'input[data-qa="password"]'
    dobDay = 'select[data-qa="days"]'
    dobMonth = 'select[data-qa="months"]'
    dobYear = 'select[data-qa="years"]'
    newsletter = '#newsletter'
    offers = '#optin'
    title = `input[data-qa="title"]`
    submitButton = 'input[data-qa="signup-button"]'
    firstName = 'input[data-qa="first_name"]'
    lastName = 'input[data-qa="last_name"]'
    company = 'input[data-qa="company"]'
    address = 'input[data-qa="address"]'
    address2 = 'input[data-qa="address2"]'
    country = 'input[data-qa="country"]'
    state = 'input[data-qa="state"]'
    city = 'input[data-qa="city"]'
    zipCode = 'input[data-qa="zipcode"]'
    mobilePhone = 'input[data-qa="mobile_number"]'
    

public async acceptTermsandConditions() {
    await this.element(this.newsletter).click();
    await this.element(this.offers).click();
}

public async additonalInformation(FirstName: string, LastName: string, Address: string, City: string, State: string, ZipCode: string, Phone: string) {

}
};  

