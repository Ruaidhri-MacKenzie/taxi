import React from 'react';
import './Destination.scss';

import StreetMap from '../../StreetMap/StreetMap';

const Destination = ({ destination, handleChange }) => {
	return (
		<section className="destination">
			{/* <label className="destination__label" htmlFor="order-destination">Drop-Off Destination</label>
			<select
				name="destination"
				id="order-destination"
				className="destination__input"
				value={destination}
				onChange={handleChange}
			>
				<option value="Aberdeen">Aberdeen</option>
				<option value="Inverurie">Inverurie</option>
				<option value="Westhill">Westhill</option>
			</select> */}
			<StreetMap />
		</section>
	);
};

export default Destination;
