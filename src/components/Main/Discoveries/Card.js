import React from 'react';
import styled from 'styled-components';

const Card = ({ info }) => {
	const { name, description, image } = info;
	return (
		<CardStyle>
			<div>
				<img src={image} alt={`Icon for ${name}`} />
			</div>
			<div>
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
		</CardStyle>
	);
};

export default Card;

const CardStyle = styled.div`
	width: 45%;
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	height: 150px;

	div:first-of-type {
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div: last-of-type {
		width: 65%;

		h3 {
			font-size: 1.6rem;
			font-weight: 600;
			margin-bottom: 10px;
		}

		p {
			font-size: 1.2rem;
		}
	}
`;
