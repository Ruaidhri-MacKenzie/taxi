import React, { useState } from 'react';
import './Location.scss';

import StreetMap from '../../StreetMap/StreetMap';
import FormNav from '../FormNav/FormNav';
import AddressForm from '../AddressForm/AddressForm';

const Location = ({ location, handleChange, backPage, nextPage }) => {
	const [viewMap, setViewMap] = useState(true);
	const showMap = () => setViewMap(true);
	const showAddress = () => setViewMap(false);

	const renderOptions = () => {
		let showMapClassName ="location__button location__show-map";
		let showAddressClassName = "location__button location__show-address";
		if (viewMap) showMapClassName += " location__button--active";
		else showAddressClassName += " location__button--active";

		return (
			<section className="location__buttons">
				<button className={showMapClassName} onClick={showMap}>Find on Map</button>
				<button className={showAddressClassName} onClick={showAddress}>Enter Address</button>
			</section>
		);
	};

	return (
		<section className="location">
			{renderOptions()}
			{viewMap && <StreetMap />}
			{!viewMap && <AddressForm />}
			<FormNav back={backPage} next={nextPage} />
		</section>
	);
};

export default Location;
