import React from 'react';
import { Menu, Dropdown, Input } from 'semantic-ui-react';

import styles from './Navbar.module.css';
import { useHistory } from 'react-router-dom';

const MobileNavbar = () => {
  const history = useHistory();
  return (
    <Menu secondary size='large' className={styles.MobileNavbar} attached='top'>
      <Dropdown item icon='bars' simple>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => history.push('/')}>Home</Dropdown.Item>
          <Dropdown.Item onClick={() => history.push('/who')}>
            Who We Are
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push('/what')}>
            What We Do
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push('/partners')}>
            Partners
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position='right'>
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

export default MobileNavbar;
