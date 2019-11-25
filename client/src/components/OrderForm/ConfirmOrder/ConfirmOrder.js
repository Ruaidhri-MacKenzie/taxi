import React from 'react';
import './ConfirmOrder.scss';

import FormNav from '../FormNav/FormNav';

const ConfirmOrder = ({ name, tel, location, destination, time, backPage, submitOrder }) => {
	return (
		<section className="confirm">
			<div className="confirm__details">
				<p className="confirm__label">Name: </p><p className="confirm__detail">{name}</p>
				<p className="confirm__label">Phone: </p><p className="confirm__detail">{tel}</p>
				<p className="confirm__label">Location: </p><p className="confirm__detail">{location}</p>
				<p className="confirm__label">Destination: </p><p className="confirm__detail">{destination}</p>
				<p className="confirm__label">Pick-up Time: </p><p className="confirm__detail">{(time || "ASAP")}</p>
			</div>
			<FormNav back={backPage} submit={submitOrder} />
		</section>
	);
};

export default ConfirmOrder;
