import {LoginPage} from "../e2e/pages/loginPage.cy"

const loginPage = new LoginPage();

it('login test', ()=> {
    
    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.enterUsername('test');
    loginPage.enterPassword('test');
    loginPage.clickLogin();
})