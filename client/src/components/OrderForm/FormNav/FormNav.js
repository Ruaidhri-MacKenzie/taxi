import React from 'react';
import './FormNav.scss';

const FormNav = ({ back, next, submit }) => {
	return (
		<nav className="nav">
			{!!back && <button className="nav__back" onClick={back}>Back</button>}
			{!!next && <button className="nav__next" onClick={next}>Next</button>}
			{!!submit && <button className="nav__submit" onClick={submit}>Submit</button>}
		</nav>
	);
};

export default FormNav;
