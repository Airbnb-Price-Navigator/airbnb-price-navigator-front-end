import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ noResults, prediction }) => {
	const [worth, setWorth] = useState(prediction);
	const modal = useRef(null);

	useEffect(() => {
		setWorth(prediction);
		if (noResults) {
			const el = modal.current;
			el.style.display = 'flex';
			if (parseFloat(el.style.opacity) === 0) {
				(function fade() {
					let val = parseFloat(el.style.opacity);
					if (!((val += 0.05) > 1)) {
						el.style.opacity = val;
						requestAnimationFrame(fade);
					}
				})();
			}
		} else if (!noResults) {
			const el = modal.current;
			(function fade() {
				if ((el.style.opacity -= 0.05) < 0) {
					el.style.opacity = 0;
					el.style.display = 'none';
				} else {
					requestAnimationFrame(fade);
				}
			})();
		}
	}, [noResults, prediction]);

	return (
		<Popup ref={modal} style={{ opacity: 0, display: 'none' }}>
			<div>
				<h3>No Data For Your Zip Code</h3>
				<p>
					Our data is gathered from{' '}
					<a
						href='http://insideairbnb.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Inside Airbnb
					</a>
					, and it looks like your ZIP code is not included in the data set. The
					national average for the parameters entered is ${worth}/night.
				</p>
			</div>
		</Popup>
	);
};

export default Modal;

const Popup = styled.div`
	width: 100%;
	background: rgba(63, 63, 63, 0.5);
	position: relative;
	top: -300px;
	height: 300px;
	justify-content: center;
	align-items: center;
	border-radius: 2px;
	margin-bottom: -300px;

	div {
		width: 80%;
		background: #fff;
		height: 80%;
		box-shadow: 0px 0px 5px -4px rgba(63, 63, 63, 0.8);
		border-radius: 2px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5%;

		h3 {
			font-weight: 600;
			font-size: 2rem;
			margin-bottom: 10px;
		}

		p {
			font-size: 1.6rem;
			text-align: center;

			a {
				text-decoration: none;
				color: #00a799;
				font-weight: 600;
			}
		}
	}
`;
