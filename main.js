import Taxi from './taxi.js';

const taxiList = [];
taxiList.push(new Taxi("Alice", "AB12 CDE", "Ford", "Blue", "Aberdeen"));
taxiList.push(new Taxi("Bob", "FG34 HIJ", "Toyota", "Red", "Inverurie"));
taxiList.push(new Taxi("Charlie", "KL56 MNO", "Kia", "Black", "Westhill"));

const orderTaxi = () => {
	const availableTaxis = taxiList.filter(taxi => taxi.available);
	if (availableTaxis.length === 0) {
		// No taxis available
		return;
	}
	
	const selectedTaxi = availableTaxis[0];
	
	// set confirmation details from selectedTaxi
};
