import React from 'react';

const BedBath = () => {
	return (
		<>
			<div>
				<label htmlFor='bedrooms'>Bedrooms</label>
				<input type='text' id='bedrooms' />
			</div>
			<div>
				<label htmlFor='bathrooms'>Bathrooms</label>
				<input type='text' id='bathrooms' />
			</div>
		</>
	);
};

export default BedBath;
