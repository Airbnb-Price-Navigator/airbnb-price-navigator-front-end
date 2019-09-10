import React, { useEffect, useState } from 'react';

const Worth = ({ value }) => {
	const [worth, setWorth] = useState(0);
	useEffect(() => {
		if (worth !== value) {
			setTimeout(() => {
				if ((value - worth) % 5 === 0) {
					setWorth(worth + 5);
				} else {
					setWorth(worth + 1);
				}
			});
		}
	}, [worth, value]);

	return (
		<>
			<h2>Your property could be worth</h2>
			<h3>${worth} / night</h3>
		</>
	);
};

export default Worth;
