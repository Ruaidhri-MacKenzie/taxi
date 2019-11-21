import React, { useState } from 'react';
import './OrderForm.scss';

import AccountDetails from './AccountDetails/AccountDetails';
import Location from './Location/Location';
import Destination from './Destination/Destination';
import PickUpTime from './PickUpTime/PickUpTime';
import ConfirmOrder from './ConfirmOrder/ConfirmOrder';

const OrderForm = () => {
	/* State */
	const [state, setState] = useState({
		page: 0,
		name: "",
		tel: "",
		time: "",
		location: "",
		destination: "",
	});

	const setTime = t => setState({ ...state, time: t });
	
	/* Event Handlers */
	const handleChange = e => setState({ ...state, [e.currentTarget.name]: e.currentTarget.value});
	const handleSubmit = e => e.preventDefault();
	
	const backPage = () => setState({ ...state, page: state.page - 1 });
	const nextPage = () => {
		// TODO: validate inputs
		setState({ ...state, page: state.page + 1 });
	};
	const submitOrder = () => {
		// TODO: validate inputs, axios http post
		console.log(`Name: ${state.name}, Tel: ${state.tel}, Time: ${state.time}, Location: ${state.location}, Destination: ${state.destination}.`);
	};

	/* Render */
	const renderHeader = () => {
		let title = "";
		if (state.page === 0) title = "Enter Your Details";
		else if (state.page === 1) title = "Select Pick-Up Location";
		else if (state.page === 2) title = "Select Destination";
		else if (state.page === 3) title = "Select Pick-Up Time";
		else if (state.page === 4) title = "Confirm Details";

		return (
			<header className="order__header">
				<h2 className="order__title">{title}</h2>
			</header>
		);
	};

	const renderBody = () => {
		switch (state.page) {
			case 0: return <AccountDetails name={state.name} tel={state.tel} handleChange={handleChange} />
			case 1: return <Location location={state.location} handleChange={handleChange} />
			case 2: return <Destination destination={state.destination} handleChange={handleChange} />
			case 3: return <PickUpTime time={state.time} setTime={setTime} handleChange={handleChange} />
			case 4: return <ConfirmOrder { ...state } />
			default:
				setState({ ...state, page: 0 });
				return null;
		}
	};

	const renderButtons = () => {
		switch (state.page) {
			case 0: return (
				<div className="order__buttons">
					<button className="order__next" onClick={nextPage}>Next</button>
				</div>
			);
			case 4: return (
				<div className="order__buttons">
					<button className="order__back" onClick={backPage}>Back</button>
					<button className="order__submit" onClick={submitOrder}>Submit</button>
				</div>
			);
			default: return (
				<div className="order__buttons">
					<button className="order__back" onClick={backPage}>Back</button>
					<button className="order__next" onClick={nextPage}>Next</button>
				</div>
			);
		}
	};
	
	return (
		<form className="order" onSubmit={handleSubmit}>
			{renderHeader()}
			{renderBody()}
			{renderButtons()}
		</form>
	);
};

export default OrderForm;
