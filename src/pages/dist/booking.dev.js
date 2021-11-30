// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import MeasurementForm from '../components/measurementForm.js';
// export default function Booking() {
// 	const [items, setItems] = useState([]);
// 	useEffect(() => {
// 		setTimeout(function () {
// 			setItems(allStorage());
// 		}, 1000);
// 	}, [items]);
// 	function allStorage() {
// 		var archive = {}, // Notice change here
// 			keys = Object.keys(sessionStorage),
// 			i = keys.length;
// 		while (i--) {
// 			archive[keys[i]] = JSON.parse(sessionStorage.getItem(keys[i]));
// 		}
// 		return archive;
// 	}
// 	return (
// 		<Container fluid>
// 			<Row className="justify-content-md-center">
// 				<Col></Col>
// 				<Col s={10}>
// 					<h1>Réservations</h1>
// 				</Col>
// 			</Row>
// 			<MeasurementForm />
// 			{Object.keys(items).map(function (key) {
// 				return (
// 					<Card
// 						body
// 						style={{
// 							width: '' + items[key].width * 37.79527559055 * 5 + 'px',
// 							height: '' + items[key].height * 37.79527559055 * 5 + 'px',
// 							backgroundColor: '' + items[key].color,
//                             color: 'white'
// 						}}
// 						value={key}
// 					>
// 						{items[key].name}
// 					</Card>
// 				);
// 			})}
// 		</Container>
// 	);
// }
"use strict";