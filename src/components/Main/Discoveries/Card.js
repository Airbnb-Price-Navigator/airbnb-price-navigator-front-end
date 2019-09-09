import React from 'react';

const Card = ({ info }) => {
	const { name, description, image } = info;
	return (
		<div>
			<img src={image} alt={`Icon for ${name}`} />
			<h3>{name}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Card;
