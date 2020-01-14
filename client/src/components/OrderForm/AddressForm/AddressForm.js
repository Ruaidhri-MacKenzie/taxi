import React, { useState } from 'react';
import './AddressForm.scss';

const AddressForm = () => {
	/* State */
	const [address, setAddress] = useState({
		number: "",
		postcode: "",
	});

	/* Event Handlers */
	const handleChange = e => setAddress({ ...address, [e.currentTarget.name]: e.currentTarget.value });

	/* Render */
	return (
		<section className="address">
			<label className="address__label" htmlFor="number">House Number</label>
			<input
				type="text"
				name="number"
				id="number"
				className="address__input"
				value={address.number}
				onChange={handleChange}
			/>

			<label className="address__label" htmlFor="postcode">Postcode</label>
			<input
				type="text"
				name="postcode"
				id="postcode"
				className="address__input"
				value={address.postcode}
				onChange={handleChange}
			/>
		</section>
	);
};

export default AddressForm;
