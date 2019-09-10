import React from 'react';

import Select from './Select';

const RoomType = ({ value, formChange }) => {
	return (
		<>
			<label htmlFor='room_type'>Room Type</label>
			<Select value={value} onChange={formChange} id='room_type'>
				<option value='Entire home/apt'>Entire Property</option>
				<option value='Private room'>Private Room</option>
				<option value='Shared room'>Shared Room</option>
			</Select>
		</>
	);
};

export default RoomType;
