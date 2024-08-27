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

	before(() => {
        // login
        userLoginPage = new LoginPage();
        userLoginPage.load();
        userLoginPage.signIn();
        // create the test data
        guest = new GuestProfile();
        addGuestProfile = new AddProfilePage();
        // Search
		searchProfilesPage = new SearchProfilePage();
        searchProfilesPage.load();
	});

    after( ()=> {
        userLoginPage.signOut();
    });

it("Verify authenticated user can access the Search Profiles Page successfully after login ",()=>{
    cy.url().should('eq', 'https://testingtasks.kwentra.com/frontoffice/#/profileslist');
    searchProfilesPage.getPanelTitle().should('be.visible');
    })

it.only("Search by Name - Ensure that the search returns profiles based on a valid name input",()=>{

    searchProfilesPage.getPanelTitle().should('be.visible');
    addGuestProfile.load();
    addGuestProfile.Add(guest);
  
    searchProfilesPage.searchByName(guest.getFirstName());

    searchProfilesPage.getSearchResultCellText().then((cellText) => {
        expect(cellText.toUpperCase()).to.contain(guest.getFirstName().toUpperCase());
    })
})

it("Search by multiple criteria  - Verify that the search can handle multiple criteria and return accurate results",()=>{
    searchProfilesPage.getPanelTitle().should('be.visible');
    addGuestProfile.load();
    addGuestProfile.Add(guest);
    searchProfilesPage.searchByNameAndCountry(guest.getFirstName(),guest.getCountry());
    searchProfilesPage.assertOnTheCellsContent(guest);
})

it("Search with All Fields Empty - Verify that the system handles searches with no criteria entered",()=>{
        searchProfilesPage.getPanelTitle().should('be.visible');
        addGuestProfile.load();
        addGuestProfile.Add(guest);
        searchProfilesPage.searchWithAllEmptyFields();
        searchProfilesPage.assertSearchResults();

})
});
