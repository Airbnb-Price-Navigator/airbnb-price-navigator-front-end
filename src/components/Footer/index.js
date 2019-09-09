import React from 'react';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<h2>Airbnb Price Navigator</h2>
			<nav>
				<a href='http://www.com'>Terms</a>
				<a href='http://www.com'>Privacy</a>
				<a href='http://www.com'>Contact Us</a>
				<a href='http://www.com'>
					<FaTwitter />
				</a>
				<a href='http://www.com'>
					<FaFacebookF />
				</a>
			</nav>
		</>
	);
};

export default Footer;
