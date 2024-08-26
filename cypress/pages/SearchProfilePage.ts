import GuestProfile from "../models/GuestProfile";

export default class SearchProfilePage {

	private get panelTitle() {
		return 'mat-panel-title';
     
	}

    private get nameInput(){
        return'[data-cy="name-input"]'
    }


	private get countryInput() {
		return '[data-cy="country-autocomplete"]';
	}

    private get countryOption(){
        return '.mat-option-text';
       // cy.get('.mat-option-text')
    }


	private get searchButton() {
		return '#search-button';
	}

    private get resetButton() {
		return '#reset-button';
	}


    private get searchResultCellSelector(){
        return '#cell-2 > .clickable';
    }

 

	load() {
        cy.visit('/frontoffice/#/profileslist?tenant_id=59');
	}

	getPanelTitle() {
		return cy.get(this.panelTitle);
	}


    searchByName(guestName: string) {
		cy.get(this.nameInput).type(guestName);	
		cy.get(this.searchButton).click();
	}
    searchByNameAndCountry(guestName: string,country : string) {
		cy.get(this.nameInput).type(guestName);
        cy.get(this.countryInput)         // Click on the country input to open the dropdown
        .click()                        // Ensure dropdown is opened
        .type(country)       // Type the country name to filter the options
        .then(() => {
            // Wait for the dropdown options to appear
            cy.get(this.countryOption) // Adjust this selector based on your actual dropdown option selector
            .contains(country) // Find the option that matches the country name
            .click();                     // Click on the matching option to select it
            });
		cy.get(this.searchButton).click();
	}



    public getSearchResultCellText(): Cypress.Chainable<string> {
        return cy.get(this.searchResultCellSelector)
          .invoke('text')         // Get the text content from the cell
          .then((cellText: string) => {
            // Decode HTML entities and trim whitespace
            const decodedText = Cypress.$('<div>').html(cellText).text().trim();
            return decodedText;
          });
        }

        assertOnTheCellsContent(guest:GuestProfile){
            cy.get('mat-row') // Selects all mat-row elements (or use a more specific selector if needed)
            .each(($row) => {
                // Assert on the content of the cell with id 'cell-2' (Name column)
                cy.wrap($row).find('#cell-2').invoke('text').then((cellText) => {
                  const trimmedText = cellText.trim().toUpperCase(); // Remove extra spaces and convert to uppercase
                  expect(trimmedText).to.include(guest.getFirstName); // Check if 'JA' is included in the cell text
                });
        
                // Assert on the content of the cell with id 'cell-11' (Country column)
                cy.wrap($row).find('#cell-11').invoke('text').then((cellText) => {
                    expect(cellText.trim()).to.equal(guest.getCountry);
                });
            });
        }

        searchWithAllEmptyFields() {
            cy.get(this.resetButton).click();
            cy.get(this.searchButton).click();

        }
    
    
        assertionForlistingAllProfiles(){
            // Example assertion for listing all profiles
            cy.get('mat-table') // Target the mat-table element
            .should('be.visible') // Ensure the table is visible
            .find('mat-row') // Find all rows in the table
            .should('have.length.greaterThan', 0); // Verify there are rows in the table
    
        }

}