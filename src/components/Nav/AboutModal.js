import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AboutModal = ({ open, setOpen }) => {
	const modal = useRef(null);

	useEffect(() => {
		let el = modal.current;
		if (open) {
			el.style.opacity = 0;
			el.style.display = 'block';
			(function fade() {
				let val = parseFloat(el.style.opacity);
				if (!((val += 0.1) > 1)) {
					el.style.opacity = val;
					requestAnimationFrame(fade);
				}
			})();
		} else {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= 0.1) < 0) {
					el.style.display = 'none';
				} else {
					requestAnimationFrame(fade);
				}
			})();
		}
	}, [open]);

	const handleClick = e => {
		const check = Array.from(modal.current.children);
		if (e.target.innerHTML === '×') setOpen(!open);
		if (!check.includes(e.target) && !check.includes(e.target.parentElement))
			setOpen(!open);
	};

	return (
		<AboutContainer
			ref={modal}
			style={{ display: 'none', opacity: 0 }}
			onClick={e => handleClick(e)}
		>
			<div onClick={() => setOpen(true)}>
				<Close>&#215;</Close>
				<h2>About</h2>
				<p>
					We all want to make more money. Airbnb has provided a platform for
					people all over the world to create an income stream from their often
					most expensive and underutilized asset, their home. Airbnb Price
					Navigator offers you transparency into the airbnb market for your
					unique space.
				</p>
			</div>
		</AboutContainer>
	);
};

export default AboutModal;

const AboutContainer = styled.div`
	position: absolute;
	top: 0;
	background: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	z-index: 5;

	div {
		background: #fff;
		position: sticky;
		margin: 250px auto 0;
		width: 40%;
		height: 250px;
		border-radius: 2px;
		padding: 30px;
		box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		@media (max-width: 1040px) {
			width: 60%;
		}

		@media (max-width: 700px) {
			width: 80%;
		}

		@media (max-width: 520px) {
			height: 300px;
		}

		h2 {
			font-weight: 600;
			font-size: 2rem;
			margin-bottom: 30px;
		}

		p {
			font-size: 1.6rem;
		}
	}
`;

const Close = styled.span`
	position: absolute;
	right: 15px;
	top: 0;
	font-size: 5rem;
	cursor: pointer;
	color: #d8d8d8;
	transition: color 300ms ease

    &:hover {
		color: #3f3f3f;
	}
`;
