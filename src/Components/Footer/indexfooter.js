import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap
} from './FooterElements.js';

const Footer = () => {
    return (
        <FooterContainer className='footer'>
            <FooterWrap className='container footer-container'>
                <SocialMedia>
                    <SocialMediaWrap className='footer-wrapper'>
                        <SocialLogo to="/" className='logo'> KHANAVAL FOOD </SocialLogo>
                        <SocialIcons className='footer-social-media'>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" >
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;