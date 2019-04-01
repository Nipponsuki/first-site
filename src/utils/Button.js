import styled from 'styled-components';
import { styles } from '../utils'

const BannerButton = styled.button`
	display: block;
	color: ${styles.colors.mainWhite};
	background: transparent;
	padding: .5rem 1rem;
	text-transform: uppercase;
	font-size: 1.5rem;
	letter-spacing: .5rem;
	font-weight: 700;
	${styles.border({})};
	margin-button: 1rem;
	${styles.transition({})};
	cursor: pointer;
	
	&:hover{
		background: ${styles.colors.mainWhite};
		color: ${styles.colors.mainBlack};

	}

`;

const SectionButton = styled(BannerButton)`
	color: ${styles.colors.mainBlack};
	${styles.border({ color: `${styles.colors.mainBlack}` })};
	cursor: pointer;

	&:hover{
		background: ${styles.colors.mainBlack};
		color: ${styles.colors.mainYellow};
	}
`;

export { BannerButton, SectionButton }