import React from 'react';
import './AccountDetails.scss';

const AccountDetails = ({ name, setName, tel, setTel }) => {
	/* Event Handlers */
	const handleNameChange = e => setName(e.currentTarget.value);
	const handleTelChange = e => setTel(e.currentTarget.value);

	/* Render */
	return (
		<section className="account">
			<div className="account__container">
				<label className="account__label" htmlFor="order-name">Name</label>
				<input
					type="text"
					name="name"
					id="order-name"
					className="account__input"
					value={name}
					onChange={handleNameChange}
					/>

				<label className="account__label" htmlFor="order-tel">Phone Number</label>
				<input
					type="tel"
					name="tel"
					id="order-tel"
					className="account__input"
					pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
					value={tel}
					onChange={handleTelChange}
				/>
			</div>
		</section>
	);
};

export default AccountDetails;
