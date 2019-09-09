import React from 'react';

const RoomType = () => {
	return (
		<>
			<label htmlFor='room'>Room Type</label>
			<select>
				<option>Entire Property</option>
				<option>Private Room</option>
				<option>Shared Room</option>
			</select>
		</>
	);
};

export default RoomType;
