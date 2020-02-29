import React from 'react';

import styles from './Who.module.css';

const Who = () => {
  return (
    <div className={styles.Who}>
      <div className={styles.RightSide}>
        <h1>Community</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam amet
          tenetur? Temporibus, enim incidunt inventore aliquam ut aut odit
          consequatur dolorem ad aperiam tempora unde nostrum harum hic fugiat,
          et ab. Eveniet mollitia ullam, voluptatem consectetur voluptates
          dignissimos quaerat nisi laudantium vitae magni sunt dolorum adipisci
          recusandae! Numquam, magni?
        </p>
      </div>
      <div className={styles.LeftSide}>
        <img
          src='https://images.unsplash.com/photo-1525138079-9424be9df411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80'
          alt='plant'
        />
      </div>
    </div>
  );
};

export default Who;
