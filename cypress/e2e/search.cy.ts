import {faker} from '@faker-js/faker'
import SearchProfilePage from '../pages/SearchProfilePage';
import LoginPage from '../pages/LoginPage';
import GuestProfile from '../models/GuestProfile';
import AddProfilePage from '../pages/AddProfilePage';

describe('Kwentra Task - Test Cases', () => {
    let userLoginPage: LoginPage;
    let guest : GuestProfile;
    let addGuestProfile : AddProfilePage;
	let searchProfilesPage: SearchProfilePage;

	beforeEach(() => {
		userLoginPage = new LoginPage();
        guest = new GuestProfile();
        addGuestProfile = new AddProfilePage();
		searchProfilesPage = new SearchProfilePage();
	
	});
it("Verify authenticated user can access the Search Profiles Page ",()=>{

    userLoginPage.load();
    userLoginPage.signIn();
    searchProfilesPage.load();
    cy.wait(15000); 
   searchProfilesPage.getPanelTitle().should('be.visible');
    })
it("Search by Name - Ensure that the search returns profiles based on a valid name input",()=>{

    userLoginPage.load();
    userLoginPage.signIn();
    searchProfilesPage.load();
    cy.wait(15000); 
    searchProfilesPage.getPanelTitle().should('be.visible');
    addGuestProfile.load();
    addGuestProfile.Add(guest);
    cy.wait(1000);
  
    searchProfilesPage.searchByName(guest.getFirstName());

    searchProfilesPage.getSearchResultCellText().then((cellText) => {
        expect(cellText.toUpperCase()).to.contain(guest.getFirstName().toUpperCase());
    })
})

it("Search by multiple criteria  - Verify that the search can handle multiple criteria and return accurate results",()=>{
  
    userLoginPage.load();
    userLoginPage.signIn();
    searchProfilesPage.load();
    cy.wait(15000); 
    searchProfilesPage.getPanelTitle().should('be.visible');
    addGuestProfile.load();
    addGuestProfile.Add(guest);
    cy.wait(1000);
    searchProfilesPage.searchByNameAndCountry(guest.getFirstName(),guest.getCountry());
    cy.wait(5000); 
    searchProfilesPage.assertOnTheCellsContent(guest);

})
it("Search with All Fields Empty - Verify that the system handles searches with no criteria entered",()=>{
   
    
        userLoginPage.load();
        userLoginPage.signIn();
        searchProfilesPage.load();
        cy.wait(15000); 
        searchProfilesPage.getPanelTitle().should('be.visible');
        addGuestProfile.load();
        addGuestProfile.Add(guest);
        cy.wait(1000);
        searchProfilesPage.searchWithAllEmptyFields();
        searchProfilesPage.assertionForlistingAllProfiles();

})
});