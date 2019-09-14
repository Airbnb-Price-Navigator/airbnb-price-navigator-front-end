import React from 'react';
import styled from 'styled-components';

import Worth from './Worth';
import Graph from './Graph';

const Results = ({ data, resultsTop }) => {
	const prediction = data ? data.prediction : null;
	const graphData = data ? data.plotValues : null;

	return (
		<ResultsStyle ref={resultsTop}>
			<Worth value={prediction} />
			<Graph
				data={graphData}
				noResults={data.noResults}
				prediction={prediction}
			/>
		</ResultsStyle>
	);
};

export default Results;

const ResultsStyle = styled.div`
	width: 55%;
	overflow: hidden;

	@media (max-width: 780px) {
		width: 85%;
		max-width: 500px;
		margin: 0 auto 0;
	}
`;
