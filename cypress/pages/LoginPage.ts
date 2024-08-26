export default  class LoginPage {
    
    load(){
        cy.visit('/account/login/');
    }

    signIn(){
        cy.get('#id_auth-username').type('testuser');
        cy.get('#id_auth-password').type('Test_user1234');
        cy.get('#login-submit-btn').click();
    }
}