import React from 'react';

import Select from './Select';

import { TwoColumnRow } from '../../../styles/shared/TwoColumnRow';

const BedTypes = () => {
	return (
		<TwoColumnRow>
			<div>
				<label htmlFor='bedType'>Bed Types</label>
				<Select id='bedType'>
					<option>Standard Bed</option>
					<option>Couch</option>
					<option>Futon</option>
					<option>Pull-Out Couch</option>
					<option>Air Mattress</option>
				</Select>
			</div>
			<div>
				<label htmlFor='beds'># of Beds</label>
				<input type='number' id='beds' />
			</div>
		</TwoColumnRow>
	);
};

export default BedTypes;
