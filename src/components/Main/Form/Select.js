import React from 'react';
import styled from 'styled-components';

const Select = ({ children, value, onChange, id }) => {
	return (
		<Dropdown>
			<select id={id} value={value} onChange={onChange}>
				{children}
			</select>
			<div />
		</Dropdown>
	);
};

export default Select;

const Dropdown = styled.div`
	width: 100%;
	position: relative;

	div:after {
		content: '>';
		font-family: 'Caudex', serif;
		font-size: 20px;
		position: absolute;
		color: #494949;
		right: 7px;
		bottom: 2px;
		transform: rotate(90deg);
		pointer-events: none;
		transition: transform 300ms ease;
	}

	select:focus-within ~ div:after {
		transform: rotate(-90deg);
	}

	select {
		width: 100%;
		appearance: none;
		position: relative;
		border: 0.6px solid #e4e4e4;
		height: 30px;
		font-size: 1.5rem;
		padding: 5px;

		&::-ms-expand {
			display: none;
		}
	}
`;
