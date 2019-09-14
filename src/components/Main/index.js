import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Form from './Form';
import Results from './Results';
import Discoveries from './Discoveries';
import Team from './Team';

const Main = () => {
	const init = {
		zipcode: '',
		property_type: 'Apartment',
		room_type: 'Entire home/apt',
		accommodates: '',
		bathrooms: '',
		bedrooms: '',
		beds: '',
		bed_type: 'Real Bed',
	};

	const [form, setForm] = useState(init);
	const [data, setData] = useState({
		prediction: 0,
		plotValues: [],
		noResults: false,
	});

	const formChange = e => {
		let value =
			e.target.type === 'number' ? Number(e.target.value) : e.target.value;
		value = !e.target.value ? '' : value;
		value = e.target.id === 'zipcode' ? value.toString() : value;
		setForm({
			...form,
			[e.target.id]: value,
		});
		setData({ prediction: 0, plotValues: [], noResults: false });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await setForm({
			...form,
			zipcode: form.zipcode.toString(),
		});
		const results = await axios.post(
			'https://d2qu1npgxlnkvp.cloudfront.net/prediction',
			form,
		);
		const dataCheck = results.data.plot_values.reduce((acc, curr) => {
			return acc + curr;
		}, 0);
		dataCheck > 0
			? setData({
					prediction: results.data.prediction,
					plotValues: results.data.plot_values,
			  })
			: setData({
					...data,
					prediction: results.data.prediction,
					noResults: true,
			  });
	};

	return (
		<>
			<Top>
				<Form data={form} formChange={formChange} handleSubmit={handleSubmit} />
				<Results data={data} />
			</Top>
			<Discoveries />
			<Team />
		</>
	);
};

export default Main;

const Top = styled.section`
	display: flex;
	justify-content: space-between;
	width: 80%;
	max-width: 1000px;
	margin: 0 auto;

	h2 {
		font-weight: 600;
		font-size: 1.8rem;
		margin-bottom: 10px;
	}
`;
