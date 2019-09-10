import React from 'react';
import styled from 'styled-components';

import ZipCode from './ZipCode';
import PropertyType from './PropertyType';
import RoomType from './RoomType';
import BedBath from './BedBath';
import BedTypes from './BedTypes';
import Bodies from './Bodies';

const Form = () => {
	return (
		<div>
			<h2>Find out the value of your property</h2>
			<PropertyForm>
				<ZipCode />
				<PropertyType />
				<RoomType />
				<BedBath />
				<BedTypes />
				<Bodies />
				<button type='submit'>Submit</button>
			</PropertyForm>
		</div>
	);
};

export default Form;

const PropertyForm = styled.form`
	display: flex;
	flex-direction: column;

	> select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		position: relative;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
