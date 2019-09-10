import React from 'react';

import Input from '../../../styles/shared/Input';

const Accomodates = ({ value, formChange }) => {
	return (
		<>
			<label htmlFor='accommodates'>Accomodates how many guests?</label>
			<Input
				type='number'
				id='accommodates'
				value={value}
				onChange={formChange}
				required
				placeholder='2'
			/>
		</>
	);
};

export default Accomodates;
