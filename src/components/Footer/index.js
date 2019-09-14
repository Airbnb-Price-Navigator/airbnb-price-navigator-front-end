import React from 'react';
import styled from 'styled-components';
// import { FaTwitter, FaFacebookF } from 'react-icons/fa';

import globe from '../../assets/icons/globe.svg';

import Logo from '../../styles/shared/Logo';

const Footer = () => {
	return (
		<FooterStyle>
			<Logo>
				<img src={globe} alt='Globe Icon' />
				<h2>Airbnb Price Navigator</h2>
			</Logo>
			<nav>
				<a href='/'>About</a>
				{/* <a href='/'>Privacy</a>
				<a href='/'>Contact Us</a>
				<a href='/'>
					<FaTwitter />
				</a>
				<a href='/'>
					<FaFacebookF />
				</a> */}
			</nav>
		</FooterStyle>
	);
};

export default Footer;

const FooterStyle = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.6rem;
	padding: 30px;
	margin: 10px auto;
	max-width: 1200px;

	a {
		font-weight: 600;
		color: #3f3f3f;
		text-decoration: none;

		svg {
			color: #00a899;
		}
	}

	nav {
		width: 30%;
		display: flex;
		justify-content: space-between;
	}
`;
