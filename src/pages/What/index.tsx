import React from 'react';

import pmDetector from '../../assets/pm-detector.jpg';

import styles from './What.module.css';

function What() {
  return (
    <div className={styles.What}>
      <div className={styles.RightSide}>
        <h1>Make the air cleaner</h1>
        <span>
          Here are a list of things we have done by informing the community of
          the air in Chiang Rai
        </span>
        <ul className={styles.WhatWeDoList}>
          <li>
            Our admins give up to date AQI updates in and around the city
            (pictures of Manit and Davids readings)
          </li>
          <li>
            Air purifier reviews with pictures (pictures of Matthews work)
          </li>
          <li>Air monitor reviews with pictures (pictures of Lonny device)</li>
        </ul>
        <p>
          &emsp;Do you want to help out with what we do and make Chiang Rai a
          better place for all of us please click on our services section to
          find out how you can help.
        </p>
      </div>
      <div className={styles.LeftSide}>
        <img src={pmDetector} alt='filter' />
      </div>
    </div>
  );
}

export default What;
