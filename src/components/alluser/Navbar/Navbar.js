import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
       <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Blood Donation</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="campaign" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Campaign</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="request" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Request Blood</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="transaction" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Be Donor</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="bloodbank" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Blood Bank</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
