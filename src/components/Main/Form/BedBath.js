import React from 'react';

import { TwoColumnRow } from '../../../styles/shared/TwoColumnRow';

const BedBath = () => {
	return (
		<TwoColumnRow>
			<div>
				<label htmlFor='bedrooms'># of Bedrooms</label>
				<input type='number' id='bedrooms' />
			</div>
			<div>
				<label htmlFor='bathrooms'># of Bathrooms</label>
				<input type='number' id='bathrooms' />
			</div>
		</TwoColumnRow>
	);
};

export default BedBath;
