import React, { useState } from 'react';
import './Destination.scss';

import StreetMap from '../../../StreetMap/StreetMap';
import AddressForm from '../../AddressForm/AddressForm';

const Destination = ({ destination, setDestination }) => {
	const [viewMap, setViewMap] = useState(true);
	const showMap = () => setViewMap(true);
	const showAddress = () => setViewMap(false);

	const renderOptions = () => {
		let showMapClassName ="destination__button destination__show-map";
		let showAddressClassName = "destination__button destination__show-address";
		if (viewMap) showMapClassName += " destination__button--active";
		else showAddressClassName += " destination__button--active";

		return (
			<section className="destination__buttons">
				<button className={showMapClassName} onClick={showMap}>Find on Map</button>
				<button className={showAddressClassName} onClick={showAddress}>Enter Address</button>
			</section>
		);
	};

	return (
		<section className="destination">
			{renderOptions()}
			{viewMap && <StreetMap latlng={destination} setLatlng={setDestination} />}
			{!viewMap && <AddressForm />}
		</section>
	);
};

export default Destination;
