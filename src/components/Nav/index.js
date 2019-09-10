import React from 'react';
import styled from 'styled-components';

import globe from '../../assets/globe.svg';

const Nav = () => {
	return (
		<Header>
			<div className='logo'>
				<img src={globe} alt='Globe Icon' />
				<h1>Airbnb Price Navigator</h1>
			</div>
			<nav>
				<p>About</p>
			</nav>
		</Header>
	);
};

export default Nav;

const Header = styled.header`
	display: flex;
	justify-content: space-between;

	.logo {
		display: flex;
	}
`;
