import React from 'react';
import styled from 'styled-components';
import { FaLink, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Card = ({ person }) => {
	const { name, description, image, links } = person;
	return (
		<Profile>
			<img src={image} alt={name} />
			<Links>
				{Object.keys(links).map(link => {
					return (
						<a
							href={links[link]}
							target='_blank'
							rel='noopener noreferrer'
							key={link}
						>
							{link === 'portfolio' ? (
								<FaLink />
							) : link === 'github' ? (
								<FaGithub />
							) : link === 'linkedin' ? (
								<FaLinkedinIn />
							) : link === 'twitter' ? (
								<FaTwitter />
							) : null}
						</a>
					);
				})}
			</Links>
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

	img {
		width: 50%
		background-color: #192a3e;
		border-radius: 50%;
		margin-bottom: 10px;
	}

	h3 {
		font-size: 1.6rem;
		font-weight: 600;
		margin-bottom: 10px;

		@media (max-width: 780px) {
			font-size: 2rem;
		}
	}

	p {
		text-align: center;
		font-size: 1.2rem;

		@media (max-width: 780px) {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 780px) {
		width: 100%;
		max-width: 500px;
		flex-direction: column;
		align-items: center;
		height: auto;
		margin: 10px 0;

		img {
			margin-bottom: 10px;
		}
	}
`;

const Links = styled.div`
	display: flex;
	justify-content: space-around;
	width: 60%;
	font-size: 2rem;
	text-align: center;
	margin-bottom: 5px;
	svg {
		fill: #3f3f3f;
		transition: fill 300ms ease;

		&:hover {
			fill: #00a799;
		}
	}
`;
