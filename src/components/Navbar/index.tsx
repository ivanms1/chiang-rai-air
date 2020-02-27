import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

import styles from './Navbar.module.css';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const history = useHistory();

  return (
    <Menu fixed='top' size='huge' secondary>
      <Menu.Item
        className={styles.Item}
        name='Chiang Rai Air'
        onClick={() => setCurrentPage('home')}
      />
      <Menu.Menu position='right'>
        <Menu.Item
          className={styles.Item}
          name='who we are'
          active={currentPage === 'messages'}
          onClick={() => setCurrentPage('who')}
        />
        <Menu.Item
          className={styles.Item}
          name='what we do'
          active={currentPage === 'what'}
          onClick={() => setCurrentPage('what')}
        />
        <Menu.Item
          className={styles.Item}
          name='services'
          active={currentPage === 'services'}
          onClick={() => setCurrentPage('services')}
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

export default Navbar;
