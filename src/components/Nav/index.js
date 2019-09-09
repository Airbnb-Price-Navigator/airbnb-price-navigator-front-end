import React from 'react';
import styled from 'styled-components';

const Nav = () => {
	return (
		<Header>
			<h1>Airbnb Price Navigator</h1>
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
`;
