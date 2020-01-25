import React from 'react';
import './Loading.scss';

const Loading = () => {
	return (
		<section className="loading">
			<h2 className="loading__title">Confirming Order</h2>
			<div className="loading__clock">|</div>
			<h3 className="loading__text">This should only take a few seconds</h3>
		</section>
	);
};

export default Loading;
