import React from 'react';

import Select from './Select';

const PropertyType = ({ value, formChange }) => {
	return (
		<>
			<label htmlFor='property_type'>Property Type</label>
			<Select value={value} onChange={formChange} id='property_type'>
				<option value='Apartment'>Apartment</option>
				<option value='House'>House</option>
				<option value='Condominium'>Condominium</option>
				<option value='Guesthouse'>Guest House</option>
				<option value='Guest suite'>Guest Suite</option>
				<option value='Townhouse'>Townhouse</option>
				<option value='Bungalow'>Bungalow</option>
				<option value='Loft'>Loft</option>
				<option value='Villa'>Villa</option>
				<option value='Other'>Other</option>
			</Select>
		</>
	);
};

export default PropertyType;
