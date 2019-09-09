import React from 'react';

const Card = ({ person }) => {
	const { name, description, image, url } = person;
	return (
		<>
			<a href={url}>
				<img src={image} alt={name} />
			</a>
			<h3>{name}</h3>
			<p>{description}</p>
		</>
	);
};

export default Card;
