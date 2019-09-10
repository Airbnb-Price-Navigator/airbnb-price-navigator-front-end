import React from 'react';

import Select from './Select';

const PropertyType = () => {
	return (
		<>
			<label htmlFor='property'>Property Type</label>
			<Select>
				<option>Apartment</option>
				<option>House</option>
				<option>Condominium</option>
				<option>Guest House</option>
				<option>Guest Suite</option>
				<option>Townhouse</option>
				<option>Bungalow</option>
				<option>Loft</option>
				<option>Villa</option>
				<option>Other</option>
			</Select>
		</>
	);
};

export default PropertyType;
