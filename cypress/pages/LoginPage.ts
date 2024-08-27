export default  class LoginPage {
    
    load(){
        //cy.visit('/account/login/?next=/frontoffice/#/profileslist?tenant_id=59');
        cy.visit('/');
    }

    //UI Sign in - [To Do]:To be replaced with Api Step for authentication]
    signIn(){
        cy.get('#id_auth-username').type('testuser');
        cy.get('#id_auth-password').type('Test_user1234');
        cy.get('#login-submit-btn').click();

        cy.wait(5000);// This wait here, makes the UI step more stable (workaround)
    }

    signOut(){
        cy.visit('/accounts/logout/');
    }
}