import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact Information</FooterLink>
              <FooterLink to="/signin">Social Media Links</FooterLink>
              <FooterLink to="/signin">Privacy Policy</FooterLink>
              <FooterLink to="/signin">Terms and Conditions</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Feedback</FooterLinkTitle>
              <FooterLink to="/signin">Send Feedback</FooterLink>
              <FooterLink to="/signin">Social Media Links</FooterLink>
              <FooterLink to="/signin">Privacy Policy</FooterLink>
              <FooterLink to="/signin">Terms and Conditions</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Resourses</FooterLinkTitle>
              <FooterLink to="/signin">Yoruba Dictionary</FooterLink>
              <FooterLink to="/signin">Yoruba Textbook</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="//www.linkedin.com/in/kehinde-rabiu/">
                LinkedIn
              </FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="//www.instagram.com/kotrabiu/">
                Instagram
              </FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Yoruba
            </SocialLogo>
            <WebsiteRights>
              Yoruba © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/in/kehinde-rabiu/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/kotrabiu/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
