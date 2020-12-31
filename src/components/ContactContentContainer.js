import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../styles/ContactContentContainer.scss';
import SocialLinks from './SocialLinks';

const ContactContentContainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`content-container ${theme}`}>
      <h2 className={`contact-header ${theme}`}>Contact Me</h2>
      <p className={`email-label ${theme}`}>Email:</p>
      <a className={`email-address ${theme}`} href='mailto:gebarra9@gmail.com'>
        Gebarra9@gmail.com
      </a>
      <SocialLinks />
    </div>
  );
};

export default ContactContentContainer;
