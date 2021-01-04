import React from 'react';
import { Navbar } from './Navbar';
import { Background } from './Background';
import AboutContentContainer from './AboutContentContainer';
import '../styles/About.scss';

export const About = () => {
  return (
    <>
      <Navbar />
      <Background />
      <AboutContentContainer />
    </>
  );
};
