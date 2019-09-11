import React from 'react';

import Card from './Card';

import Section from '../../../styles/shared/Section';

import blank from '../../../assets/pictures/blank.png';
import jacob from '../../../assets/pictures/Jacob.png';
import kevin from '../../../assets/pictures/kevin.png';
import shreyas from '../../../assets/pictures/Shreyas.png';
import tomas from '../../../assets/pictures/Tomas.png';

const Team = () => {
	const team = [
		{
			name: 'Connor Heraty',
			description:
				'Product Owner. Responsible for model implementation and flask deployment.',
			image: blank,
			url: 'https://github.com/connorpheraty',
		},
		{
			name: 'Shreyas Jothish',
			description:
				'Worked on Data Wrangling, Feature Engineering, and Data Modeling of seasonal information Los Angeles dataset.',
			image: shreyas,
			url: 'https://github.com/ShreyasJothish',
		},
		{
			name: 'Tomas Fox',
			description:
				'Responsible for benchmarking our Airbnb predictor app against Tree Ensemble ML models.',
			image: tomas,
			url: 'https://github.com/tomfox1',
		},
		{
			name: 'Chris Carter',
			description:
				'Responsible for the front end of the project. Partnered with the UI developers and back end architect to ensure full functionality of React components.',
			image: blank,
			url: 'https://github.com/ChrisJCarter91',
		},
		{
			name: 'Jacob Bartlett',
			description:
				'UX Designer responsible for creating a new visual identity for the project.',
			image: jacob,
			url: 'https://github.com/',
		},
		{
			name: 'Kevin Smith',
			description:
				'Front end engineer responsible for refactoring React code and implementing new UX design.',
			image: kevin,
			url: 'https://github.com/keveightysev',
		},
	];

	return (
		<Section>
			<h2>Our Team</h2>
			<div>
				{team.map((member, index) => (
					<Card person={member} key={index} />
				))}
			</div>
		</Section>
	);
};

export default Team;
