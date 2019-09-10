import React from 'react';
import styled from 'styled-components';

const Select = ({ children }) => {
	return (
		<Dropdown>
			<select>{children}</select>
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
		bottom: 6px;
		transform: rotate(90deg);
		pointer-events: none;
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

		&::-ms-expand {
			display: none;
		}
	}
`;
