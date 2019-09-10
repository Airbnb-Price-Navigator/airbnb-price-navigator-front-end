import React from 'react';

import Select from './Select';

import { TwoColumnRow } from '../../../styles/shared/TwoColumnRow';
import Input from '../../../styles/shared/Input';

const BedTypes = ({ values, formChange }) => {
	const { beds, bedType } = values;
	return (
		<TwoColumnRow>
			<div>
				<label htmlFor='bed_type'>Bed Types</label>
				<Select id='bed_type' value={bedType} onChange={formChange}>
					<option value='Real Bed'>Standard Bed</option>
					<option value='Couch'>Couch</option>
					<option value='Futon'>Futon</option>
					<option value='Pull-out Sofa'>Pull-Out Couch</option>
					<option value='Airbed'>Air Mattress</option>
				</Select>
			</div>
			<div>
				<label htmlFor='beds'># of Beds</label>
				<Input
					type='number'
					id='beds'
					placeholder='1'
					value={beds}
					onChange={formChange}
				/>
			</div>
		</TwoColumnRow>
	);
};

export default BedTypes;
