import React from 'react';

import styles from './What.module.css';

function What() {
  return (
    <div className={styles.What}>
      <div className={styles.RightSide}>
        <h1>Make the air cleaner</h1>
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
          src='https://images.unsplash.com/photo-1526197393380-592c737d3bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3961&q=80'
          alt='filter'
        />
      </div>
    </div>
  );
}

export default What;
