import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/all";
import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap
} from "./FooterElements";

const Footer=()=>{
    return(
        <FooterContainer>
      <FooterWrap>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialIcons>
                      <SocialIconLink href='/' target="blank" aria-label="Facebook" rel="noopener noreferrer"><FaFacebook/></SocialIconLink>
                      <SocialIconLink href='/' target="blank" aria-label="Instagram"  rel="noopener noreferrer"><FaInstagram/></SocialIconLink>
                      <SocialIconLink href='/' target="blank" aria-label="Twitter" rel="noopener noreferrer"><FaTwitter/></SocialIconLink>
                      <SocialIconLink href='/' target="blank" aria-label="Youtube" rel="noopener noreferrer"><FaYoutube/></SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>

          </SocialMedia>
      </FooterWrap>


        </FooterContainer>
    );
}
export default Footer;
