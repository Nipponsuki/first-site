import React, { useState } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './Navbarlinks';
import NavbarIcons from './Navbaricons';
import styled from 'styled-components';



const NavWrapper = styled.nav`
	@media(min-width: 768px){
		display: flex;
		align-items: center;
	}

`;


const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleNavbar = () => {
		setNavbarOpen(!navbarOpen);
	}
	return (
		<NavWrapper>
			<NavbarHeader handleNavbar={handleNavbar} />
			<NavbarLinks navbarOpen={navbarOpen} />
			<NavbarIcons />
		</NavWrapper>
	);
};

export default Navbar;