import React from 'react';
import './AccountDetails.scss';

import FormNav from '../FormNav/FormNav';

const AccountDetails = ({ name, tel, handleChange, nextPage }) => {
	// const validateInputs = () => {
	// 	if (!name) {
	// 		console.log("Name is required.");
	// 		return false;
	// 	}
	// 	else if (name.length < 3) {
	// 		console.log("Name must be at least 3 characters long.");
	// 		return false;
	// 	}
	// 	else if (!tel) {
	// 		console.log("Phone number is required.");
	// 		return false;
	// 	}
	// 	else if (!tel.match(/^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/)) {
	// 		console.log("Phone number must be in UK format.");
	// 		return false;
	// 	}
	// 	else {
	// 		return true;
	// 	}
	// };

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
					onChange={handleChange}
					/>

				<label className="account__label" htmlFor="order-tel">Phone Number</label>
				<input
					type="tel"
					name="tel"
					id="order-tel"
					className="account__input"
					pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
					value={tel}
					onChange={handleChange}
				/>
			</div>

			<FormNav next={nextPage} />
		</section>
	);
};

export default AccountDetails;
