import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Stack } from 'react-bootstrap';
import MeasurementForm from '../components/measurementForm.js';
import { AiFillCloseCircle } from 'react-icons/ai';
import Contact from './contact.js';

export default function Booking() {
	const offer = [];
	const total = [];
	const [valid, setValid] = useState(false);

	let results = mergeItems();

	function mergeItems() {
		let data = {};
		let k = 0;
		for (let i = 0; i < sessionStorage.length; i++) {
			data[i] = JSON.parse(sessionStorage.getItem(k));
			k++;
		}
		for (let i = 0; i < data.length; i++) {
			if (i > 0 && i <= 3) {
				// data[i] = Number(data[i]);
				data[i] += data[i].replace(/,/, '.');
			} else if (data % 4 != 0) {
				// data[i + 4] = Number(data[i]);
				data[i + 4] += data[i + 4].replace(/,/, '.');
			}
		}
		console.log(data);
		calcTotalDimensions(data);
		return data;
	}

	function calcTotalDimensions(items) {
		let width = 0;
		let length = 0;
		let height = 0;
		for (let i = 0; i < items.length; i++) {
			width += Number(items[1]);
			length += Number(items[2]);
			if (items[i].height > height) {
				height = items[i].height;
			}
		}
		total['square'] = Number(width) * Number(length);
		console.log(Number(width));
		total['heigth'] = Number(height);
		console.log(total['square']);
		compareTotalToOffers(total['square']);
	}

	function compareTotalToOffers(total) {
		if (total >= Number(2) && total <= Number(3)) {
			offer['name'] = 'Box de taille S';
			offer['price'] = '50€ HT / mois';
			setValid(true);
		} else if (total > Number(3) && total <= Number(6)) {
			offer['name'] = 'Box de taille M';
			offer['price'] = '80€ HT / mois';
			setValid(true);
		} else if (total > Number(6) && total <= Number(10)) {
			offer['name'] = 'Box de taille L';
			offer['price'] = '140€ HT / mois';
			setValid(true);
		} else if (total > Number(10) && total <= Number(16)) {
			offer['name'] = 'Box de taille XL';
			offer['price'] = '200€ HT / mois';
			setValid(true);
		} else if (total > Number(16)) {
			offer['error'] = "Nous n'avons pas de box assez grand à vous proposer";
			setValid(false);
		} else if (total < Number(0)) {
			offer['error'] = "Vous n'avez encore rien saisi";
			setValid(false);
		}
	}
	return (
		<Container fluid>
			<Row className="justify-content-md-center">
				<Col></Col>
				<Col s={10}>
					<h1>Réservations</h1>
				</Col>
			</Row>
			<MeasurementForm />
			<h2>Résumé de vos objets</h2>
			<Stack direction="horizontal" gap={3}>
				{results ? (
					Object.keys(results).map(function (key) {
						return (
							<Card body value={key}>
								<AiFillCloseCircle
									onClick={() => {
										sessionStorage.removeItem(key);
										window.location.reload(false);
									}}
								/>
								<p>{results[key][0].name}</p>
								<p>
									Dimensions:{' '}
									{Number(results[key][1].width) *
										Number(results[key][2].length)}
									m²
								</p>
								<p>Hauteur: {Number(results[key][3].height)}m</p>
							</Card>
						);
					})
				) : (
					<p>Non</p>
				)}
			</Stack>
			<Row>
				{valid ? (
					<div>
						<p>Vos objets occupent un espace de {total['square']}m²</p>
						<p>Nous pouvons vous proposer l'offre suivante:</p>
						<p>
							{offer['name']} pour {offer['price']}
						</p>
					</div>
				) : (
					<div>
						<p>{offer['error']}</p>
					</div>
				)}
			</Row>
		</Container>
	);
}
