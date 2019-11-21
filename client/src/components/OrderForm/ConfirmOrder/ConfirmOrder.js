import React from 'react';
import './ConfirmOrder.scss';

const ConfirmOrder = ({ name, tel, location, destination, time }) => {
	return (
		<section className="confirm">
			<p className="confirm__label">Name: </p><p className="confirm__details">{name}</p>
			<p className="confirm__label">Phone: </p><p className="confirm__details">{tel}</p>
			<p className="confirm__label">Location: </p><p className="confirm__details">{location}</p>
			<p className="confirm__label">Destination: </p><p className="confirm__details">{destination}</p>
			<p className="confirm__label">Pick-up Time: </p><p className="confirm__details">{(time || "ASAP")}</p>
		</section>
	);
};

export default ConfirmOrder;
