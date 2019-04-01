import React from 'react';
import styled from 'styled-components';
import { styles } from '../utils';

const TitleWrapper = styled.div`
	text-align: center;

	h1{
		${styles.letterSpacing({ spacing: '0.3rem' })};
		font-size: 2rem;
		text-transform: uppercase;		
	}

	h3{
		${styles.textSlanted};
		${styles.letterSpacing({ spacing: '0.3rem' })};
		font-size: 2rem;
		color: ${styles.colors.mainYellow};
	}
	
	.underline{
		margin: 0.5rem auto;
		width: 5rem;
		height: .2rem;
		background: ${styles.colors.mainYellow};
	}
`;


const Title = ({ title, message }) => {
	return (
		<TitleWrapper>
			<h3>{message}</h3>
			<h1>{title}</h1>
			<div className="underline"></div>
		</TitleWrapper>
	);
};

Title.defaultProps = {
	message: 'our message',
	title: 'our title'
}

export { Title };