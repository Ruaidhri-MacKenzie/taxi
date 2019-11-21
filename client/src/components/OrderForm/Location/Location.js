import React from 'react';
import './Location.scss';

import StreetMap from '../../StreetMap/StreetMap';

const Location = ({ location, handleChange }) => {
	return (
		<section className="location">
				{/* <label className="location__label" htmlFor="order-location">Pick-Up Location</label>
				<select
					name="location"
					id="order-location"
					className="location__input"
					value={location}
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

export default Location;
