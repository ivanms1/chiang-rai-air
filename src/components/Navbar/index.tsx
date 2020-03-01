import React from 'react';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <React.Fragment>
      <DesktopNavbar />
      <MobileNavbar />
    </React.Fragment>
  );
};

export default Navbar;
