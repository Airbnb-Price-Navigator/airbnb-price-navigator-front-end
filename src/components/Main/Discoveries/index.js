import React from 'react';

import Card from './Card';

const Discoveries = () => {
	const discoveries = [
		{
			name: 'Amenities',
			description:
				"Did you know amenities are a necessary part of any valuable Airbnb listing? We've found that, on average, homes that have more than 85 amenities list for an additional 100% price increase than homes with 28 or fewer amenities. Essential ammenities include towels, toilet paper, soap, pillows, and bed linings.",
			image: 'http://mock.image',
		},
		{
			name: 'Reviews',
			description:
				'While it may be intuitive that having high review score ratings can increase your daily listing price, having at least 60 reviews will get you, on average, an increase in listing price of 20% as compared to people who have received 20 to 60 reviews.',
			image: 'http://mock.image',
		},
		{
			name: 'Instantly Bookable',
			description:
				'There is an option on Airbnb that enables for a home to be instantly bookable; interestingly enough we’ve found that on average, homes that are instantly bookable will have a lower listing price.',
			image: 'http://mock.image',
		},
		{
			name: 'Bed Types',
			description:
				'Did you know bed types can have a notable influence on your daily listing price?  We’ve found that, on average, real beds go for an 80% price increase as compared to airbeds.',
			image: 'http://mock.image',
		},
		{
			name: 'Build Trust',
			description:
				'It is important to build an image of trust with your customers; don’t forget to upload a profile picture with your listing.  Listings whose owners have profile pictures have daily listing prices of 30% greater than listings with no accompanying profile picture.',
			image: 'http://mock.image',
		},
		{
			name: 'Identity',
			description:
				'Also, don’t forget to add your identity!  Users who have their identity verified will see a 5% increase in their listing prices.',
			image: 'http://mock.image',
		},
	];

	return (
		<>
			<h2>Discoveries</h2>
			<div>
				{discoveries.map(discovery => {
					return <Card info={discovery} />;
				})}
			</div>
		</>
	);
};

export default Discoveries;
