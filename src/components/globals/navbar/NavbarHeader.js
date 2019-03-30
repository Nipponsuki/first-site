import React from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../../utils'



const HeaderWrapper = styled.div`
	padding: .4rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	.toggle-icon{
		font-size: 1.75rem;
		color: ${styles.colors.mainYellow};
		cursor: pointer;
		
		@media(min-width:768px){
			display: none;
		}
	}


`;

const NavbarHeader = ({ handleNavbar }) => {

	return (
		<HeaderWrapper>
			<Link to='/'>
				<img src={logo} alt="company name" />
			</Link>
			<FaAlignRight className="toggle-icon" onClick={() => { handleNavbar() }} />
		</HeaderWrapper>
	);
};

export default NavbarHeader;