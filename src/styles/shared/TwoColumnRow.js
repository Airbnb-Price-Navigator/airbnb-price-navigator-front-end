import styled from 'styled-components';

export const TwoColumnRow = styled.div`
	display: flex;
	justify-content: space-between;

	div {
		display: flex;
		flex-direction: column;
		width: 49%;

		div {
			width: 100%;
		}
	}
`;
