import React from 'react';
import './Address.scss';

const Address = ({ address }) => {
	if (!address) return null;
	
	const { number, street, city, county, postcode } = address;

	return (
		<ol className="address">
			<li className="address__line">{number + " " + street}</li>
			<li className="address__line">{city}</li>
			<li className="address__line">{county}</li>
			<li className="address__line">{postcode}</li>
		</ol>
	);
};

export default Address;
