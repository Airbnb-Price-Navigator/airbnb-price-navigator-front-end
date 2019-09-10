import React from 'react';

import Input from '../../../styles/shared/Input';

const ZipCode = ({ value, formChange }) => {
	value = value ? Number(value.toString().substring(0, 5)) : value;
	return (
		<>
			<label htmlFor='zip'>Zip Code</label>
			<Input
				type='number'
				id='zipcode'
				placeholder='90210'
				maxLength='5'
				required
				value={value}
				onChange={e => formChange(e)}
			/>
		</>
	);
};

export default ZipCode;
