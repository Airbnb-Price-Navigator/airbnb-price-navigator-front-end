import React, { useState, useEffect } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

import Modal from './Modal';

const Graph = ({ data, noResults, prediction }) => {
	const [plotValues, setPlotValues] = useState([]);

	useEffect(() => {
		setPlotValues([
			{
				bin: '$0-50',
				amt: data[0] || 0,
			},
			{
				bin: '$50-100',
				amt: data[1] || 0,
			},
			{
				bin: '$100-150',
				amt: data[2] || 0,
			},
			{
				bin: '$150-200',
				amt: data[3] || 0,
			},
			{
				bin: '$200-300',
				amt: data[4] || 0,
			},
			{
				bin: '$300-400',
				amt: data[5] || 0,
			},
			{
				bin: '$400-500',
				amt: data[6] || 0,
			},
			{
				bin: '$500-750',
				amt: data[7] || 0,
			},
			{
				bin: '$750-1,000',
				amt: data[8] || 0,
			},
			{
				bin: '$1,000+',
				amt: data[9] || 0,
			},
		]);
	}, [data]);

	return (
		<>
			<h2>Property values in your area</h2>
			<ResponsiveContainer width='100%' height={300}>
				<BarChart data={plotValues}>
					<CartesianGrid vertical={false} horizontalPoints={[170, 97, 20]} />
					<XAxis
						dataKey='bin'
						interval={0}
						tick={<RotatedTick />}
						tickLine={false}
						height={50}
						padding={{ right: 15 }}
					/>
					<YAxis
						ticks={[50, 100, 150]}
						axisLine={false}
						tickLine={false}
						width={40}
						minTickGap={50}
						label={<YAxisLabel />}
					/>
					<Bar dataKey='amt' fill='#00A799' />
				</BarChart>
			</ResponsiveContainer>
			<Modal noResults={noResults} prediction={prediction} />
		</>
	);
};

export default Graph;

const RotatedTick = ({ x, y, payload }) => {
	return (
		<g transform={`translate(${x - 5}, ${y - 10})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor='start'
				fill='#666'
				transform='rotate(35)'
			>
				{payload.value}
			</text>
		</g>
	);
};

const YAxisLabel = ({ viewBox }) => {
	return (
		<text
			x={viewBox.x}
			y={viewBox.y}
			transform='rotate(-90, 90, 90) translate(-10, 5)'
			className='recharts-text recharts-label'
		>
			Number of AirBnB Units
		</text>
	);
};
