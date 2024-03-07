import {Ui} from './page.ts';



export class LoginPage extends Ui {
    url = 'login';
    signupName = 'input[data-qa="signup-name"]'
    signupEmail = 'input[data-qa="signup-email"]'
    signUpButton = 'button[data-qa="signup-button"]'
    
public async signUp(name: string, email: string) {
    await this.element(this.signupName).setValue(name);
    await this.element(this.signupEmail).setValue(email);
    await this.element(this.signUpButton).click();
}
};
