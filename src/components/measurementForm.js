import React, { useState, useEffect } from 'react';
import { Form, Stack, Button } from 'react-bootstrap';

export default function MeasurementForm() {
	const [datas, setDatas] = useState([]);
	const [data, setData] = useState([]);
	const [amount, setAmount] = useState(sessionStorage.length);

	const handleSubmit = async () => {
		setAmount(amount + 1);
		store();
		try {
		} catch (error) {}
	};

	const handleChange = ({ currentTarget }) => {
		const { name, value } = currentTarget;
		setData([
			...data,
			{
				[name]: value
			}
		]);
	};

	useEffect(() => {
		let data = JSON.parse(sessionStorage.getItem('test'));
		if (data) {
			setData(data);
		}
	}, [data]);

	function store() {
		sessionStorage.setItem('' + amount + '', JSON.stringify(data));
	}
	return (
		<Form onSubmit={handleSubmit}>
			<Stack direction="horizontal" gap={3}>
				<div className="bg-light border">
					<Form.Floating>
						<Form.Control
							onChange={handleChange}
							id="floatingNameInput"
							type="text"
							name="name"
							placeholder="name@example.com"
						/>
						<label htmlFor="floatingNameInput">Nom</label>
					</Form.Floating>
				</div>
				<div className="bg-light border">
					<Form.Floating>
						<Form.Control
							onChange={handleChange}
							id="floatingInputCustom"
							type="number"
							step="0.01"
							min="0"
							max="2.50"
							name="height"
							placeholder="name@example.com"
						/>
						<label htmlFor="floatingHeightInput">Hauteur (mètre)</label>
					</Form.Floating>
				</div>
				<div className="bg-light border">
					<Form.Floating>
						<Form.Control
							onChange={handleChange}
							id="floatingInputCustom"
							type="number"
							step="0.01"
							min="0"
							name="width"
							placeholder="name@example.com"
						/>
						<label htmlFor="floatingWidthInput">Largeur (mètre)</label>
					</Form.Floating>
				</div>
				<div className="bg-light border">
					<Form.Floating>
						<Form.Control
							onChange={handleChange}
							id="floatingInputCustom"
							type="number"
							step="0.01"
							min="0"
							name="length"
							placeholder="name@example.com"
						/>
						<label htmlFor="floatinglengthInput">Longueur (mètre)</label>
					</Form.Floating>
				</div>
				<Button variant="primary" type="submit">
					Valider
				</Button>
			</Stack>
		</Form>
	);
}
