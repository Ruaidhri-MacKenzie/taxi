import React, { useState } from 'react';
import './AddressForm.scss';

const AddressForm = () => {
	const [address, setAddress] = useState({
		house: "",
		postcode: "",
	});
	const handleChange = e => setAddress({ ...address, [e.currentTarget.name]: e.currentTarget.value });

	return (
		<section className="address">
			<label className="address__label" htmlFor="house">House Number</label>
			<input
				type="text"
				name="house"
				id="house"
				className="address__input"
				value={address.house}
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
