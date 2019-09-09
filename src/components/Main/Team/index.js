import React from 'react';

import Card from './Card';

const Team = () => {
	const team = [
		{
			name: 'Connor Heraty',
			description:
				'Product Owner. Responsible for model implementation and flask deployment.',
			image: 'http://blank.image',
			url: 'http://github.com/',
		},
		{
			name: 'Shreyas Jothish',
			description:
				'Worked on Data Wrangling, Feature Engineering, and Data Modeling of seasonal information Los Angeles dataset.',
			image: 'http://blank.image',
			url: 'http://github.com/',
		},
		{
			name: 'Tomas Fox',
			description:
				'Responsible for benchmarking our Airbnb predictor app against Tree Ensemble ML models.',
			image: 'http://blank.image',
			url: 'http://github.com/',
		},
		{
			name: 'Chris Carter',
			description:
				'Responsible for the front end of the project. Partnered with the UI developers and back end architect to ensure full functionality of React components.',
			image: 'http://blank.image',
			url: 'http://github.com/',
		},
		{
			name: 'Jacob Bartlett',
			description:
				'UX Designer responsible for creating a new visual identity for the project.',
			image: 'http://blank.image',
			url: 'http://github.com/',
		},
		{
			name: 'Kevin Smith',
			description:
				'Front end engineer responsible for refactoring React code and implementing new UX design.',
			image: 'http://blank.image',
			url: 'http://github.com/',
		},
	];

	return (
		<>
			<h2>Our Team</h2>
			{team.map(member => (
				<Card person={member} />
			))}
		</>
	);
};

export default Team;
