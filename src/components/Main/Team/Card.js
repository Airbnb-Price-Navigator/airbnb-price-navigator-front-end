import React from 'react';
import styled from 'styled-components';

const Card = ({ person }) => {
	const { name, description, image, url } = person;
	return (
		<Profile>
			<a href={url}>
				<img src={image} alt={name} />
			</a>
			<h3>{name}</h3>
			<p>{description}</p>
		</Profile>
	);
};

export default Card;

const Profile = styled.div`
	width: 200px;
	margin 10px 15px;
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		width: 50%;
		margin-bottom: 10px;
		img {
			width: 100%
			background-color: #192a3e;
			border-radius: 50%;
		}
	}

	h3 {
		font-size: 1.6rem;
		font-weight: 600;
		margin-bottom: 10px;
	}

	p {
		text-align: center;
		font-size: 1.2rem;
	}
`;
