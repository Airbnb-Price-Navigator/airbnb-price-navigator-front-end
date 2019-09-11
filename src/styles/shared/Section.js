import styled from 'styled-components';

const Section = styled.section`
	width: 90%;
	max-width: 1100px;
	margin: 0 auto;

	h2 {
		font-size: 2rem;
		font-weight: 600;
		margin: 20px 0 10px;
	}

	> div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
`;

export default Section;
