import React, { useState, useEffect } from 'react';
import './PickUpTime.scss';

const PickUpTime = ({ time, setTime, handleChange }) => {
	const [scheduled, setScheduled] = useState(false);
	useEffect(() => {
		if (!time) setScheduled(false);
		else setScheduled(true);
	}, [time]);

	const clickTimeInput = () => {
		if (time) return;

		const minDelayInMinutes = 30;
		const date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();

		if (minutes >= minDelayInMinutes) {
			minutes -= minDelayInMinutes;

			if (hours === 23) hours = 0;
			else hours += 1;
		}
		else {
			minutes += minDelayInMinutes;
		}

		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		setTime(hours + ":" + minutes);
	};
	const clickASAP = () => setTime("");

	return (
		<section className="time">
			<label className="time__label" htmlFor="order-time">Pick-Up Time</label>
			<input
				type="time"
				name="time"
				id="order-time"
				className={(scheduled) ? "time__input" : "time__input time__input--disabled"}
				value={time}
				onChange={handleChange}
				onClick={clickTimeInput}
			/>
			<p className={(scheduled) ? "time__asap" : "time__asap time__asap--active"} onClick={clickASAP}>As soon as possible</p>
		</section>
	);
};

export default PickUpTime;
