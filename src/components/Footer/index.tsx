import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <h1 className={styles.Title}>Chiang Rai Air</h1>
        <p className={styles.FooterParagraph}>
          We are a thriving community helping people in need about anything and
          everything to do with the air in Chiang Rai.
        </p>
      </div>
      <div className={styles.FooterRight}>
        <div className={styles.Icons}>
          <a href='https'>
            <Icon size='big' name='facebook' />
          </a>
          <a href='https'>
            <Icon size='big' name='twitter' />
          </a>
          <a href='https'>
            <Icon size='big' name='instagram' />
          </a>
          <a href='https'>
            <Icon size='big' name='youtube' />
          </a>
        </div>
        <div className={styles.FooterLinks}>
          <Link to='/'>home</Link>

          <Link to='/partners'>partners</Link>

          <Link to='/contact'>contact</Link>
        </div>
        <div className={styles.Copyright}>
          Made by <a href='https://www.ivansaldano.com/'>Ivan</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
