import { faker } from '@faker-js/faker';

export default class GuestProfile {
	private firstName: string;
	private lastName: string;
	private Country: string;
	private ContactType: string;


	constructor() {
		this.firstName = faker.person.firstName();
		this.lastName = faker.person.lastName();
		this.Country = "Albania"
        console.log(this.Country);
		this.ContactType = 'Main';
	}

	getFirstName() {
		return this.firstName;
	}
	getLastName() {
		return this.lastName;
	}
	getCountry() {
		return this.Country;
	}

    getContactType() {
		return this.ContactType;
	}

}