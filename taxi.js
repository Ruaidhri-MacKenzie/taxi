export default class Taxi {
	constructor(driver, reg, brand, colour, location) {
		this.driver = driver;
		this.reg = reg;
		this.brand = brand;
		this.colour = colour;
		this.location = location;

		this.available = true;
		this.miles = 0;
	}
}
