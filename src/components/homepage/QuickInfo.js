import React from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';

const QuickInfoWrapper = styled.div`
	width: 90%;
	margin: 2rem auto;
	.text{
		line-height: 2rem;
		color: ${styles.colors.mainGrey};
		word-spacing: .2rem;
		text-align: center;
	}

	@media(min-width: 786px){
		width: 70%;
	}
	@media(min-width: 992px){
		width: 60%;
	}

`;


const QuickInfo = () => {
	return (
		<Section>
			<Title message="let us tell you" title="our mission" />
			<QuickInfoWrapper>
				<p className="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.				</p>
				<Link to='/about' style={{ textDecoration: 'none' }}>
					<SectionButton style={{ margin: '2rem auto' }}>
						about
					</SectionButton>
				</Link>
			</QuickInfoWrapper>
		</Section>
	);
};

export default QuickInfo;