import React from 'react';

import Select from './Select';

const RoomType = () => {
	return (
		<>
			<label htmlFor='room'>Room Type</label>
			<Select>
				<option>Entire Property</option>
				<option>Private Room</option>
				<option>Shared Room</option>
			</Select>
		</>
	);
};

export default RoomType;
