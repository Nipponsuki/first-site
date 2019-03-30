import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../../utils';


const LinkWrapper = styled.ul`
	li{
		list-style-type: none;
	}
	.nav-link{
		display: block;
		text-decoration: none;
		padding: .5rem 1rem;
		color: ${styles.colors.mainGrey};
		font-weight: 700;
		text-transform: capitalize;
		cursor: pointer;
		${styles.transDefault};

		&:hover{
			background: ${styles.colors.mainGrey};
			color: ${styles.colors.mainYellow};
			padding: .5rem 1rem .5rem 1.3rem;
		}
	}
	height: ${props => props.open ? '152px' : '0px'};
	overflow: hidden;
	${styles.transObject({})};
	@media (min-width: 786px){
		height: auto;
		display: flex;
		margin: 0 auto;
		.nav-link:hover{
			background: ${styles.colors.mainWhite};
			padding: 0.5rem 1rem .5rem 1rem;
		}
	}
`;

const Navbarlinks = ({ navbarOpen }) => {
	const [links, setLinks] = useState([

		{
			id: 0,
			path: '/',
			name: 'home'
		},
		{
			id: 1,
			path: '/about',
			name: 'about'
		},
		{
			id: 2,
			path: '/menu',
			name: 'menu'
		},
		{
			id: 3,
			path: '/contact',
			name: 'contact'
		}
	]
	)
	return (
		<LinkWrapper open={navbarOpen}>
			{links.map(link => (
				<li key={link.id}>
					<Link to={link.path} className="nav-link">
						{link.name}
					</Link>
				</li>
			))}
		</LinkWrapper>
	);
};

export default Navbarlinks;