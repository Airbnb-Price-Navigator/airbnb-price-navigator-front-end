import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ZipCode from './ZipCode';
import PropertyType from './PropertyType';
import RoomType from './RoomType';
import BedBath from './BedBath';
import BedTypes from './BedTypes';
import Accomodates from './Accomodates';

const Form = ({ data, formChange, handleSubmit }) => {
	const [valid, setValid] = useState(false);

	const {
		zipcode,
		propertyType,
		roomType,
		accommodates,
		bathrooms,
		bedrooms,
		beds,
		bedType,
	} = data;

	useEffect(() => {
		if (zipcode && accommodates && bathrooms && bedrooms && beds) {
			setValid(true);
		} else {
			setValid(false);
		}
	}, [zipcode, accommodates, bathrooms, bedrooms, beds]);

	return (
		<PropertyForm onSubmit={e => handleSubmit(e)}>
			<h2>Find out the value of your property</h2>
			<ZipCode value={zipcode} formChange={formChange} />
			<PropertyType value={propertyType} formChange={formChange} />
			<RoomType value={roomType} formChange={formChange} />
			<BedBath values={{ bathrooms, bedrooms }} formChange={formChange} />
			<BedTypes values={{ beds, bedType }} formChange={formChange} />
			<Accomodates value={accommodates} formChange={formChange} />
			<button type='submit' disabled={!valid}>
				Submit
			</button>
		</PropertyForm>
	);
};

export default Form;

const PropertyForm = styled.form`
	width: 30%;
	display: flex;
	flex-direction: column;

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	label {
		margin: 10px 0 5px;
	}

	button {
		height: 30px;
		width: 100%;
		border: none;
		border-radius 2px;
		margin-top: 10px;
		background: #00A799
		color: #fff;

		&[disabled] {
			background: #e4e4e4;
		}
	}
`;
