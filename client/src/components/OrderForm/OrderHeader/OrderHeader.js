import React from 'react';
import './OrderHeader.scss';

const OrderHeader = ({ page }) => {
	const getTitle = () => {
		if (page === 0) return "Enter Your Details";
		else if (page === 1) return "Select Pick-Up Location";
		else if (page === 2) return "Select Destination";
		else if (page === 3) return "Select Pick-Up Time";
		else if (page === 4) return "Confirm Details";
		else if (page === 5) return "Please Wait";
		else return "";
	};

	return (
		<header className="order-header">
			<h2 className="order-header__title">{getTitle()}</h2>
		</header>
	);
};

export default OrderHeader;
