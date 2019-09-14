import styled from 'styled-components';

const Section = styled.section`
	width: 90%;
	max-width: 1100px;
	margin: 75px auto;

	h2 {
		font-size: 2rem;
		font-weight: 600;
		margin: 20px 0 40px;
	}

	> div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		@media (max-width: 780px) {
			flex-direction: column;
		}
	}

	@media (max-width: 780px) {
		width: 85%;
		max-width: 500px;
		margin: 30px auto;
	}
`;

export default Section;
