import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import Project1 from '../assets/images/shopping-cart-list.png';
import Project2 from '../assets/images/findmyipaddress.png';
// import ReactGA from 'react-ga4';
import '../styles/WorkContentContainer.scss';

const WorkContentContainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`content-container ${theme}`}>
      <h2 className={`project-header ${theme}`}>Projects</h2>
      <div className='content-flex-container'>
        <a
          to='https://shopping-cart-list.netlify.app/'
          //eventLabel='Shopping List Cart Project Website'
          href='https://shopping-cart-list.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='project-link'
        >
          <img
            src={Project1}
            target='_blank'
            rel='noreferrer'
            alt='Shopping List Cart Project'
            className={`project-image`}
          />
        </a>
        <div className='project-text-content'>
          <h3 className={`project-title ${theme}`}>Shopping Cart List App</h3>
          <p className={`project-description ${theme}`}>
            The shopping cart list app uses the web browsers local storage to
            persist the data and maintain CRUD functionality. Users can enter
            desired shopping items and filter items by catergory.
          </p>
          <div className='tech-names'>
            <div className={`tech-name ${theme}`}>HTML</div>
            <div className={`tech-name ${theme}`}>CSS</div>
            <div className={`tech-name ${theme}`}>JavaScript</div>
          </div>
          <div className='project-icon-links'>
            <a
              to='https://github.com/Gbarra9/Shopping-Cart'
              //eventLabel='Shopping List Cart Project Github'
              className='project-icon-link'
              href='https://github.com/Gbarra9/Shopping-Cart'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`ionicon-project ${theme}`}
                viewBox='0 0 512 512'
              >
                <title>Logo Github</title>
                <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z' />
              </svg>
            </a>
            <a
              to='https://shopping-cart-list.netlify.app/'
              //eventLabel='Shopping List Cart Project Website'
              href='https://shopping-cart-list.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='project-icon-link'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='external-link-alt'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className={`ionicon-project ${theme}`}
              >
                <title>Website Link Icon</title>
                <path d='M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='content-flex-container'>
        <a
          to='https://findmyipaddress.netlify.app/'
          //eventLabel='Find My Ip Address Project Website'
          href='https://findmyipaddress.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='project-link'
        >
          <img
            src={Project2}
            target='_blank'
            rel='noreferrer'
            alt='Find my ip address project'
            className={`project-image`}
          />
        </a>
        <div className='project-text-content'>
          <h3 className={`project-title ${theme}`}>Find My IP Address App</h3>
          <p className={`project-description ${theme}`}>
            The ip address tracker app uses Ipify's API to send the ip address
            of the user. Please disable any adblocker browser extensions when
            using this app. Adblocker browser extensions blocks https requests
            to the Ipify's API server.
          </p>
          <div className='tech-names'>
            <div className={`tech-name ${theme}`}>HTML</div>
            <div className={`tech-name ${theme}`}>CSS</div>
            <div className={`tech-name ${theme}`}>JavaScript</div>
            <div className={`tech-name ${theme}`}>API</div>
          </div>
          <div className='project-icon-links'>
            <a
              to='https://github.com/Gbarra9/ip-address-tracker'
              //eventLabel='Find My Ip Address Github'
              className='project-icon-link'
              href='https://github.com/Gbarra9/ip-address-tracker'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`ionicon-project ${theme}`}
                viewBox='0 0 512 512'
              >
                <title>Logo Github</title>
                <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z' />
              </svg>
            </a>
            <a
              to='https://findmyipaddress.netlify.app/'
              //eventLabel='Find My Ip Address Project Website'
              className='project-icon-link'
              href='https://findmyipaddress.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='external-link-alt'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className={`ionicon-project ${theme}`}
              >
                <title>Website Link Icon</title>
                <path d='M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkContentContainer;
