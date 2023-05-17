import React from 'react';
import { TopbarContainer, Icon, CloseIcon, TopBtnWrap, TopbarLink, TopbarRoute, TopbarWrapper, TopbarMenu } from './HeaderElements';

const Header = ({isOpen, toggle}) => {
    return (
        <TopbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <TopbarWrapper>
                <TopbarMenu>
                    <TopbarLink to="about" onClick={toggle}>About Us</TopbarLink>
                    <TopbarLink to="campaign" onClick={toggle}>Campaign</TopbarLink>
                    <TopbarLink to="request" onClick={toggle}>Request Blood</TopbarLink>
                    <TopbarLink to="transaction" onClick={toggle}>Be Donor</TopbarLink>
                    <TopbarLink to="bloodbank" onClick={toggle}>Blood Bank</TopbarLink>
                    <TopbarLink to="contact" onClick={toggle}>Contact Us</TopbarLink>
                </TopbarMenu>
                <TopBtnWrap>
                    <TopbarRoute to="/signin">Sign In</TopbarRoute>
                </TopBtnWrap>
            </TopbarWrapper>
        </TopbarContainer>
    )
}

export default Header;
