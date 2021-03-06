import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

import styles from './Navbar.module.css';

const DesktopNavbar = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const history = useHistory();

  return (
    <Menu className={styles.DesktopNavbar} fixed='top' size='huge' secondary>
      <Menu.Item
        className={styles.Item}
        name='Chiang Rai Air'
        onClick={() => {
          history.push('/');
          setCurrentPage('home');
        }}
      />
      <Menu.Menu position='right'>
        <Menu.Item
          className={styles.Item}
          name='who we are'
          active={currentPage === 'messages'}
          onClick={() => {
            history.push('/who');
            setCurrentPage('who');
          }}
        />
        <Menu.Item
          className={styles.Item}
          name='what we do'
          active={currentPage === 'what'}
          onClick={() => {
            history.push('/what');
            setCurrentPage('what');
          }}
        />
        <Menu.Item
          className={styles.Item}
          name='partners'
          active={currentPage === 'partners'}
          onClick={() => {
            history.push('/partners');
            setCurrentPage('partners');
          }}
        />
        <Menu.Item
          className={styles.Item}
          name='contact'
          active={currentPage === 'contact'}
          onClick={() => {
            history.push('/contact');
            setCurrentPage('contact');
          }}
        />
        <Menu.Item>
          <Input
            onChange={e => {
              if (!e.target.value) {
                history.push('/');
              } else {
                history.push(`/search/${e.target.value}`);
              }
            }}
            icon='search'
            placeholder='City Name...'
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DesktopNavbar;
