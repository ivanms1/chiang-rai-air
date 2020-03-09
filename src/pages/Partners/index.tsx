import React from 'react';

import styles from './Partners.module.css';

function Partners() {
  return (
    <div className={styles.Partners}>
      <div className={styles.RightSide}>
        <h1>Our Friends</h1>
        <p>
          At Chiang Rai Air we want people to know places where they can dine
          with air purifiers. <br />
          At Chiang Rai Air we also want people to know GYMs that they can go to
          with air purifiers. <br />
          At Chiang Rai Air we also want people to know Schools that have air
          purifiers so our community can make better informed decisions.
          <br />
          &emsp;If you are a local business let us know if you have air
          purifiers so we can inform people in our community.
        </p>
      </div>
      <div className={styles.LeftSide}>
        <img
          src='https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3401&q=80'
          alt='filter'
        />
      </div>
    </div>
  );
}

export default Partners;
