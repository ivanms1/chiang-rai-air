import React from 'react';

import riceField from '../../assets/mountains.jpg';

import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <img className={styles.IntroImage} src={riceField} alt='pm-detector' />
      <div className={styles.RightSide}>
        <h2 className={styles.Title}>Welcome to Chiang Rai Air.</h2>
        <ul className={styles.IntroList}>
          <li>Are you worried about the Air in Chiang Rai?</li>
          <li>
            Do you want valuable information to help you make better informed
            decisions?
          </li>
          <li>
            Do you want to know where to buy air purifiers or better still how
            to do it yourself?
          </li>
          <li>
            Have you always wanted to know what AQI means and what it measures?
          </li>
          <li>Worried about your kids breathing?</li>
        </ul>
        <p className={styles.IntroParagraph}>
          &emsp;We are a thriving community helping people in need about
          anything and everything to do with the air in Chiang Rai.
        </p>
      </div>
    </div>
  );
};

export default Intro;
