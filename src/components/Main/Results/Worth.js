import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Worth = ({ value }) => {
	const [worth, setWorth] = useState(0);
	const [match, setMatch] = useState(false);
	useEffect(() => {
		if (worth !== value) {
			setMatch(false);
			if (value > worth) {
				setTimeout(() => {
					if ((value - worth) % 5 === 0) {
						setWorth(worth + 5);
					} else {
						setWorth(worth + 1);
					}
				});
			} else {
				setTimeout(() => {
					if ((worth - value) % 5 === 0) {
						setWorth(worth - 5);
					} else {
						setWorth(worth - 1);
					}
				});
			}
		} else if (worth === value && worth > 0) {
			setMatch(true);
		}
	}, [worth, value]);

	return (
		<>
			<h2 id='resultsTop'>Your property could be worth</h2>
			<WorthText match={match}>${worth} / night</WorthText>
		</>
	);
};

export default Worth;

const WorthText = styled.h3`
	font-weight: 600;
	font-size: 5rem;
	color: ${({ match }) => (match ? '#inherit' : '#d8d8d8')};
	margin-bottom: 30px;

	@media (max-width: 780px) {
		font-size: 4rem;
	}
`;
