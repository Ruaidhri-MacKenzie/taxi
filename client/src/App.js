import React from 'react';
import './App.scss';

import OrderForm from './components/OrderForm/OrderForm';

function App() {
  return (
    <div className="App">
			<header className="header">
				<h1 className="header__title">Taxi!</h1>
			</header>
			<main className="main">
				<OrderForm />
			</main>
			<footer className="footer">

			</footer>
    </div>
  );
}

export default App;
