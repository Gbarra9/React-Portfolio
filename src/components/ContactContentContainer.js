import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../styles/ContactContentContainer.scss';
import SocialLinks from './SocialLinks';
import ReactGA from 'react-ga4';

const ContactContentContainer = () => {
  const { theme } = useContext(ThemeContext);
  const emailClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked or pressed my email contact button',
      label: 'Email contact button opens mailto window',
    });
  };
  return (
    <div className={`content-container ${theme}`}>
      <div className='contact-flex-container'>
        <h2 className={`contact-header ${theme}`}>Contact Me</h2>
        <p className={`email-label ${theme}`}>Email:</p>
        <a
          className={`email-address ${theme}`}
          href='mailto:gebarra9@gmail.com'
          onClick={emailClick}
        >
          Gebarra9@gmail.com
        </a>
        <div className='contact-social-links-container'>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactContentContainer;
