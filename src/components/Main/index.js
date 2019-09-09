import React from 'react';
import styled from 'styled-components';

import Form from './Form';
import Results from './Results';
import Discoveries from './Discoveries';
import Team from './Team';

const Main = () => {
	return (
		<>
			<Top>
				<Form />
				<Results />
			</Top>
			<Discoveries />
			<Team />
		</>
	);
};

export default Main;

const Top = styled.section`
	display: flex;
	justify-content: space-around;
`;
