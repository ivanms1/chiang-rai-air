import React from 'react';

import chiangRaiAir from '../../assets/rice-field-sunset.png';

import styles from './Who.module.css';

const Who = () => {
  return (
    <div className={styles.Who}>
      <div className={styles.RightSide}>
        <h1>Community</h1>
        <p>
          The journey began when I arrived into the country from New Zealand.
          <br /> &emsp;I saw how dreadful the air was so decided to take action.
          I wanted to help people to get better advice about the air in Chiang
          Rai and what was out there that could help us do that.
          <br /> &emsp;Fast forward we have a team of 4 dedicated individuals
          who volunteer their time to do the same and who all share the same
          vision. A cleaner-green air in Chiang Rai.
          <br />
          &emsp;We welcome you all to the community.
        </p>
      </div>
      <div className={styles.LeftSide}>
        <img src={chiangRaiAir} alt='plant' />
      </div>
    </div>
  );
};

export default Who;
