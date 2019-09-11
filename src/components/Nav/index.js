import React from 'react';
import styled from 'styled-components';

import globe from '../../assets/icons/globe.svg';

const Nav = () => {
	return (
		<Header>
			<div className='logo'>
				<img src={globe} alt='Globe Icon' />
				<h1>Airbnb Price Navigator</h1>
			</div>
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

	.logo {
		display: flex;
		align-items: center;

		h1 {
			font-size: 2rem;
			margin-left: 15px;
			font-weight: 600;
		}
	}

	a {
		font-weight: 600;
		color: #3f3f3f;
		text-decoration: none;
	}
`;
