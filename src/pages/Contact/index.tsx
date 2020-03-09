import React from 'react';

import ContactForm from './ContactForm';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.RightSide}>
        <h1>Contact Page</h1>
        <span className={styles.Subtitle}>
          For all queries please enter your name, email and number so the reason
          in the boxes below and we will attend to you as soon as possible.
        </span>
        <ContactForm />
      </div>
      <div className={styles.LeftSide}>
        <img
          src='https://images.unsplash.com/photo-1526197393380-592c737d3bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3961&q=80'
          alt='filter'
        />
      </div>
    </div>
  );
};

export default Contact;
