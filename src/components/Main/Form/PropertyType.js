import React from 'react';

const PropertyType = () => {
	return (
		<>
			<label htmlFor='property'>Property Type</label>
			<select>
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
			</select>
		</>
	);
};

export default PropertyType;
