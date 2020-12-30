import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../styles/SocialLinks.scss';

const SocialLinks = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`social-link-container ${theme}`}>
      <a
        href='https://github.com/Gbarra9'
        target='_blank'
        rel='noreferrer'
        className='link-tag'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`ionicon ${theme}`}
          viewBox='0 0 512 512'
        >
          <title>Logo Github</title>
          <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z' />
        </svg>
        <p className='social-icon-text'>Github</p>
      </a>

      <a
        href='https://www.linkedin.com/in/gene-barra-37006a107/'
        target='_blank'
        rel='noreferrer'
        className='link-tag'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`ionicon ${theme}`}
          viewBox='0 0 512 512'
        >
          <title>Logo Linkedin</title>
          <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
        </svg>
        <p className='social-icon-text'>LinkedIn</p>
      </a>

      <a
        href='https://twitter.com/barra_gene'
        target='_blank'
        rel='noreferrer'
        className='link-tag'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`ionicon ${theme}`}
          viewBox='0 0 512 512'
        >
          <title>Logo Twitter</title>
          <path d='M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z' />
        </svg>
        <p className='social-icon-text'>Twitter</p>
      </a>

      <a
        href='https://drive.google.com/file/d/1CbKwMLCv_gi9kXlQnY1VI2ObRJH4_Auo/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        className='link-tag'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`ionicon ${theme}`}
          viewBox='0 0 512 512'
        >
          <title>Resume</title>
          <path d='M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z' />
        </svg>
        <p className='social-icon-text'>Resume</p>
      </a>
    </div>
  );
};

export default SocialLinks;
