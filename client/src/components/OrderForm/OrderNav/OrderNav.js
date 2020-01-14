import React from 'react';
import './OrderNav.scss';

const OrderNav = ({ page, back, next, submit, validateDetails }) => {
	if (page === 0 && !validateDetails()) {
		next = () => validateDetails();
	}

	/* Render */
	const renderNextButton = () => {
		// Next button greyed out on first page when details are invalid
		if (page === 0) {
			if (validateDetails()) return <button className="order-nav__next" onClick={next}>Next</button>
			else return <button className="order-nav__next order-nav__next--grey" onClick={next}>Next</button> 
		}
		else if (page > 0 && page < 4) return <button className="order-nav__next" onClick={next}>Next</button>
		else return null;
	};

	return (
		<nav className="order-nav">
			{(page > 0) && <button className="order-nav__back" onClick={back}>Back</button>}
			{renderNextButton()}
			{(page === 4) && <button className="order-nav__submit" onClick={submit}>Submit</button>}
		</nav>
	);
};

export default OrderNav;
