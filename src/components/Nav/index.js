import React from 'react';
import styled from 'styled-components';

import globe from '../../assets/icons/globe.svg';

import Logo from '../../styles/shared/Logo';

const Nav = () => {
	return (
		<Header>
			<Logo>
				<img src={globe} alt='Globe Icon' />
				<h1>Airbnb Price Navigator</h1>
			</Logo>
			<nav>
				<a href='/'>About</a>
			</nav>
		</Header>
	);
};

export default Nav;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.6rem;
	padding: 30px;
	margin: 0 auto;
	max-width: 1200px;

	a {
		font-weight: 600;
		color: #3f3f3f;
		text-decoration: none;
	}
`;
