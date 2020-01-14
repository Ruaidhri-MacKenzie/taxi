import React from 'react';
import './ConfirmOrder.scss';

import Address from '../../Address/Address';

const ConfirmOrder = ({ name, tel, time, locationAddress, destinationAddress }) => {
	return (
		<section className="confirm">
			<div className="confirm__details">
				<p className="confirm__label">Name: </p><p className="confirm__detail">{name}</p>
				<p className="confirm__label">Phone: </p><p className="confirm__detail">{tel}</p>
				<p className="confirm__label">Location: </p><Address address={locationAddress} align="left" />
				<p className="confirm__label">Destination: </p><Address address={destinationAddress} align="left" />
				<p className="confirm__label">Pick-up Time: </p><p className="confirm__detail">{(time || "ASAP")}</p>
			</div>
		</section>
	);
};

export default ConfirmOrder;
