import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  Label,
  Address,
} from "./ContactElements";
import {
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./ContactElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div id="contact">
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <Address>Nepal, Lalitpur, dhobigat, 4</Address>
                <Label>Phone: +977-9860569017</Label> <br /> <br />
                <Label>Email: anupthapa@gmail.com</Label>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Blood Donation
              </SocialLogo>
              <WebsiteRights>
                Blood Donation &#169; {new Date().getFullYear()} All rights
                reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.youtube.com"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default Contact;
