"use client";
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
  ATag,
} from "./FooterElements";

import Link from "next/link";
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
              <FooterLink href="/signin">Contact Information</FooterLink>

              <FooterLink href="/signin">Social Media Links</FooterLink>

              <FooterLink href="/signin">Privacy Policy</FooterLink>

              <FooterLink href="/signin">Terms and Conditions</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Feedback</FooterLinkTitle>

              <FooterLink href="/signin">Send Feedback</FooterLink>

              <FooterLink href="/signin">Social Media Links</FooterLink>

              <FooterLink href="/signin">Privacy Policy</FooterLink>

              <FooterLink href="/signin">Terms and Conditions</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Resourses</FooterLinkTitle>

              <FooterLink href="/signin">Yoruba Dictionary</FooterLink>

              <FooterLink href="/signin">Yoruba Textbook</FooterLink>

              <FooterLink href="/signin">Destinations</FooterLink>

              <FooterLink href="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>

              <ATag href="//www.linkedin.com/in/kehinde-rabiu/">LinkedIn</ATag>

              <FooterLink href="/signin">Facebook</FooterLink>

              <ATag href="//www.instagram.com/kotrabiu/">Instagram</ATag>

              <FooterLink href="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="/" onClick={() => toggleHome()}>
              Yoruba
            </SocialLogo>
            <WebsiteRights>
              Yoruba © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              {/* <SocialIconLink
                href="https://www.linkedin.com/in/kehinde-rabiu/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/kotrabiu/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink> */}
              <SocialIconLink
                href="https://www.linkedin.com/in/kehinde-rabiu/"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/kotrabiu/"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
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
