import React from 'react';
import './Address.scss';

const Address = ({ address, align = "center" }) => {
	if (!address) return null;
	
	const { number, street, city, county, postcode } = address;
	const alignClassName = (align === "left") ? " address--left"
									: (align === "center") ? " address-center"
									:	(align === "right") ? " address-right"
									: "";
	return (
		<ol className={"address" + alignClassName}>
			<li className="address__line">{number + " " + street}</li>
			<li className="address__line">{city}</li>
			<li className="address__line">{county}</li>
			<li className="address__line">{postcode}</li>
		</ol>
	);
};

export default Address;
