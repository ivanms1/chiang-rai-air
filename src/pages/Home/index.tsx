import React from 'react';

import LandingPage from './LandingPage';
import Intro from './Intro';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <LandingPage />
      <Intro />
    </div>
  );
};

export default Home;
