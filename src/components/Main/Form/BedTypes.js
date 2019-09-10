import React from 'react';

import { TwoColumnRow } from '../../../styles/shared/TwoColumnRow';

const BedTypes = () => {
	return (
		<TwoColumnRow>
			<div>
				<label htmlFor='bedType'>Bed Types</label>
				<select id='bedType'>
					<option>Standard Bed</option>
					<option>Couch</option>
					<option>Futon</option>
					<option>Pull-Out Couch</option>
					<option>Air Mattress</option>
				</select>
			</div>
			<div>
				<label htmlFor='beds'># of Beds</label>
				<input type='number' id='beds' />
			</div>
		</TwoColumnRow>
	);
};

export default BedTypes;
