import React, { useState } from 'react';
import './AddressForm.scss';

import Address from '../../Address/Address';

const AddressForm = () => {
	/* State */
	const [address, setAddress] = useState({
		number: "",
		postcode: "",
	});
	const [fullAddress, setFullAddress] = useState(null);

	/* Event Handlers */
	const handleChange = e => setAddress({ ...address, [e.currentTarget.name]: e.currentTarget.value });
	const handleClick = e => {
		console.log("Looking up address...");
		setFullAddress({
			number: "123",
			street: "Fake Street",
			city: "Nottatown",
			county: "Nowhereshire",
			postcode: "AB12 3XY",
		});
	};

	/* Render */
	return (
		<section className="address-form">
			<label className="address-form__label" htmlFor="number">House Number</label>
			<input
				type="text"
				name="number"
				id="number"
				className="address-form__input"
				value={address.number}
				onChange={handleChange}
			/>

			<label className="address-form__label" htmlFor="postcode">Postcode</label>
			<input
				type="text"
				name="postcode"
				id="postcode"
				className="address-form__input"
				value={address.postcode}
				onChange={handleChange}
			/>
			
			{(address.number && address.postcode)
				? <button className= "address-form__button address-form__lookup" onClick={handleClick}>Look Up Address</button>
				: <button className= "address-form__button address-form__lookup address-form__lookup--grey">Look Up Address</button>
			}

			<div className="address-form__container">
				<Address address={fullAddress} />
				{fullAddress && <button className="address-form__button address-form__select" onClick={e => console.log(e)}>Select This Address</button>}
			</div>
		</section>
	);
};

export default AddressForm;
