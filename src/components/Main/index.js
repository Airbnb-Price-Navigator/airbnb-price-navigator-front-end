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
	const [data, setData] = useState(null);

	const formChange = e => {
		let value =
			e.target.type === 'number' ? Number(e.target.value) : e.target.value;
		value = !e.target.value ? '' : value;
		setForm({
			...form,
			[e.target.id]: value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const results = await axios.post(
			'http://airbnb-app.gwmmfpt9vt.us-east-2.elasticbeanstalk.com/prediction',
			form,
		);
		setData({
			prediction: results.data.prediction,
			bins: results.data.bins,
			plotValues: results.data.plot_values,
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
	margin: 0 auto;

	h2 {
		font-weight: 600;
		font-size: 2rem;
		margin-bottom: 10px;
	}
`;
