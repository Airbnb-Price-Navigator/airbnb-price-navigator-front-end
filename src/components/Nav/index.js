import React, { useState } from 'react';
import styled from 'styled-components';

import globe from '../../assets/icons/globe.svg';

import Logo from '../../styles/shared/Logo';

import AboutModal from './AboutModal';

const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Header>
				<Logo>
					<img src={globe} alt='Globe Icon' />
					<h1>Airbnb Price Navigator</h1>
				</Logo>
				<nav>
					<span onClick={() => setOpen(!open)}>About</span>
				</nav>
			</Header>
			<AboutModal open={open} setOpen={setOpen} />
		</>
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

	span {
		font-weight: 600;
		color: #3f3f3f;
		cursor: pointer;
		transition: color 300ms ease;

		&:hover {
			color: #00a799;
		}
	}
`;
