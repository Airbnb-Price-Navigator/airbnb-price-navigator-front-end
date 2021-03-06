import styled from 'styled-components';

const Input = styled.input`
	height: 30px;
	border: 0.6px solid #e4e4e4;
	border-radius: 1px;
	font-size: 1.5rem;
	padding: 5px;
	width: 100%;
	appearance: none;

	@media (max-width: 780px) {
		height: 35px;
		font-size: 1.8rem;
	}

	&::placeholder {
		color: #d8d8d8;
	}
`;

export default Input;
