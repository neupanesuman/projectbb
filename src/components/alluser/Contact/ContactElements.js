import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: var(--background-color);
  height: 88vh;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  flex-directon: column;
  align-items: flex-start;
  margin: 10px;
  text-align: center;
  box-sizing: border-box;
  color: var(--text-color);

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  color: white;
  font-size: 40px;
  margin-bottom: 80px;
`;

export const Address = styled.address`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;

  &:hover {
    color: var(--text-color);
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  :hover {
    color: red;
  }
`;
