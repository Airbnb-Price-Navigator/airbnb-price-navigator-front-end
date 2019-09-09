import React from 'react';

import ZipCode from './ZipCode';
import PropertyType from './PropertyType';
import RoomType from './RoomType';
import BedBath from './BedBath';
import BedTypes from './BedTypes';
import Bodies from './Bodies';

const Form = () => {
	return (
		<div>
			<h2>Find out the value of your property</h2>
			<form>
				<ZipCode />
				<PropertyType />
				<RoomType />
				<BedBath />
				<BedTypes />
				<Bodies />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
