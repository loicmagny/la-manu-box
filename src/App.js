import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Home from './pages/home';
import Booking from './pages/booking.js';
import Contact from './pages/contact.js';
import About from './pages/about.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/booking" element={<Booking />} />
				<Route exact path="/contact" element={<Contact />} />s
				<Route exact path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
