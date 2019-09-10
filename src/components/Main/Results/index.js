import React from 'react';
import styled from 'styled-components';

import Worth from './Worth';
import Graph from './Graph';

const Results = ({ data }) => {
	const prediction = data ? data.prediction : null;
	const graphData = data
		? { bins: data.bins, plotValues: data.plotValues }
		: null;
	return (
		<ResultsStyle>
			<Worth value={prediction} />
			<Graph data={graphData} />
		</ResultsStyle>
	);
};

export default Results;

const ResultsStyle = styled.div`
	width: 55%;

	h3 {
		font-weight: 600;
		font-size: 5rem;
		color: #d8d8d8;
	}
`;
