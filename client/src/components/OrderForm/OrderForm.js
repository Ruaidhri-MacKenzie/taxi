import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.scss';

import Error from '../Error/Error';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderNav from './OrderNav/OrderNav';
import AccountDetails from './AccountDetails/AccountDetails';
import Location from './Location/Location';
import Destination from './Destination/Destination';
import PickUpTime from './PickUpTime/PickUpTime';
import ConfirmOrder from './ConfirmOrder/ConfirmOrder';

const lookUpAddress = latlng => {
	// Reverse geocoding
	return {
		number: "123",
		street: "Fake Street",
		city: "Nottatown",
		county: "Nowhereshire",
		postcode: "AB12 3XY",
	};
};

// const lookUpLatlng = address => {
// 	// Geocoding
// 	return [57.1497, -2.0943];
// };

const OrderForm = () => {
	/* State */
	const [page, setPage] = useState(0);
	const [error, setError] = useState("");

	const [name, setName] = useState("asd");
	const [tel, setTel] = useState("01234567890");
	const [time, setTime] = useState("");
	const [location, setLocation] = useState([57.1497, -2.0943]);
	const [locationAddress, setLocationAddress] = useState(lookUpAddress(location));
	const [destination, setDestination] = useState([57.1497, -2.0943]);
	const [destinationAddress, setDestinationAddress] = useState(lookUpAddress(destination));
	
	const updateLocation = latlng => {
		setLocation(latlng);
		setLocationAddress(lookUpAddress(latlng));
	};
	const updateDestination = latlng => {
		setDestination(latlng);
		setDestinationAddress(lookUpAddress(latlng));
	};
	const backPage = () => setPage(page - 1);
	const nextPage = () => setPage(page + 1);

	const validateDetails = () => {
		if (!name) {
			setError("Name is required.");
			return false;
		}
		else if (name.length < 3) {
			setError("Name must be at least 3 characters long.");
			return false;
		}
		else if (name.length >= 25) {
			setError("Name must be less than 25 characters long.");
			return false;
		}
		else if (!tel) {
			setError("Phone number is required.");
			return false;
		}
		else if (!tel.match(/^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/)) {
			setError("Phone number must be in UK format.");
			return false;
		}
		else {
			setError("");
			return true;
		}
	};

	const submitOrder = () => {
		if (validateDetails()) {
			axios.post('/order', { name, tel, time, location, locationAddress, destination, destinationAddress });
			console.log(`Name: ${name}, Tel: ${tel}, Time: ${time}, Location: ${location}, Destination: ${destination}.`);
		}
	};

	/* Event Handlers */
	const handleSubmit = e => e.preventDefault();
	
	/* Render */
	const renderBody = () => {
		switch (page) {
			case 0: return <AccountDetails name={name} setName={setName} tel={tel} setTel={setTel} />
			case 1: return <Location location={location} setLocation={updateLocation} />
			case 2: return <Destination destination={destination} setDestination={updateDestination} />
			case 3: return <PickUpTime time={time} setTime={setTime} />
			case 4: return <ConfirmOrder {...{ name, tel, time, locationAddress, destinationAddress }} />
			default:
				setPage(0);
				return null;
		}
	};
	
	return (
		<form className="order" onSubmit={handleSubmit}>
			<OrderHeader page={page} />
			{renderBody()}
			{error && <Error error={error} />}
			<OrderNav page={page} back={backPage} next={nextPage} submit={submitOrder} validateDetails={validateDetails} />
		</form>
	);
};

export default OrderForm;
