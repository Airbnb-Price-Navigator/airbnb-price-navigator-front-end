import React from 'react';

import { TwoColumnRow } from '../../../styles/shared/TwoColumnRow';
import Input from '../../../styles/shared/Input';

const BedBath = ({ values, formChange }) => {
	const { bedrooms, bathrooms } = values;
	return (
		<TwoColumnRow>
			<div>
				<label htmlFor='bedrooms'>Bedrooms</label>
				<Input
					type='number'
					id='bedrooms'
					placeholder='# of Bedrooms'
					value={bedrooms}
					onChange={formChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='bathrooms'>Bathrooms</label>
				<Input
					type='number'
					id='bathrooms'
					placeholder='# of Bathrooms'
					value={bathrooms}
					onChange={formChange}
					required
				/>
			</div>
		</TwoColumnRow>
	);
};

export default BedBath;
