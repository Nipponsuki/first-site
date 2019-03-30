import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { FaInstagram, FaTwitch, FaFacebook } from 'react-icons/fa';


const IconsWrapper = styled.div`
	.icon{
		font-size: 1.3rem;
		cursor: pointer;
		${styles.transFunction()};
		&:hover{
			color: ${styles.colors.mainYellow};
		}
	}
	.facebook-icon{
		color: #3b579d;
	}
	.twitter-icon{
		color: #6441a5;
	}
	.instagram-icon{
		color: #C13584;
	}
	display: none;
	@media(min-width: 768px){
		width: 10rem;
		display: flex;
		justify-content: space-around;
	}
`;

const Navbaricons = () => {
	const [icons, setIcons] = useState([
		{ id: 1, icon: <FaFacebook className="icon facebook-icon" />, path: 'https://www.facebook.com' },
		{ id: 2, icon: <FaTwitch className="icon twitter-icon" />, path: 'https://www.twitter.com' },
		{ id: 3, icon: <FaInstagram className="icon instagram-icon" />, path: 'https://www.instagram.com' },
	]);

	return (
		<IconsWrapper>
			{icons.map(icon => (
				<a key={icon.id} target="_blank" rel="noopener noreferrer" href={icon.path}>{icon.icon}</a>
			))}
		</IconsWrapper>
	);
};

export default Navbaricons;