import GuestProfile from "../models/GuestProfile";

export default  class AddProfilePage {


    private get firstNameInput() {
		return '[data-cy="first-name-input"]';
	}

	private get lastNameInput() {
		return '[data-cy="last-name-input"]';
	}

	private get countryInput() {
		return '[data-cy="country-autocomplete"]';
	}

	private get contactTypeInput() {
		return '[data-cy="contact-type-autocomplete"]';
	}

    private get saveButton(){
        return '#save-btn';
    }

	load() {
        cy.visit('/frontoffice/#/profileslist/add');
	}

	Add(guest: GuestProfile) {
		cy.get(this.firstNameInput).type(guest.getFirstName());
		cy.get(this.lastNameInput).type(guest.getLastName());
		// cy.get(this.countryInput).type(guest.getCountry());
        cy.get(this.countryInput)         // Click on the country input to open the dropdown
        .click()                        // Ensure dropdown is opened
        .type(guest.getCountry())       // Type the country name to filter the options
        .then(() => {
            // Wait for the dropdown options to appear
            cy.get('.mat-option-text') // Adjust this selector based on your actual dropdown option selector
            .contains(guest.getCountry()) // Find the option that matches the country name
            .click();                     // Click on the matching option to select it
            });
		cy.get(this.contactTypeInput)
        .click()
        .type(guest.getContactType())       // Type the country name to filter the options
        .then(() => {
            // Wait for the dropdown options to appear
            cy.get('.mat-option-text') // Adjust this selector based on your actual dropdown option selector
            .contains(guest.getContactType()) // Find the option that matches the country name
            .click();                     // Click on the matching option to select it
            });
		cy.get(this.saveButton).click();
	}

}