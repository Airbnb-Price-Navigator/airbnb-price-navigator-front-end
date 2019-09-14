import React from 'react';
import styled from 'styled-components';

import Worth from './Worth';
import Graph from './Graph';

const Results = ({ data }) => {
	const prediction = data ? data.prediction : null;
	const graphData = data ? data.plotValues : null;

	return (
		<ResultsStyle>
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
`;
