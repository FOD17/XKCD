import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div clasName="menu-icon">
        <FontAwesomeIcon
          icon={faBars}
          className="burger-menu"
          onClick={() => toggleMenu()}
        />
      </div>
      <div className={isOpen ? 'menu' : 'menu-hide'} id="menu">
        <ul>
          <li>Archive</li>
          <li>What If?</li>
          <li>Blag</li>
          <li>About</li>
          <li>Feed/Email</li>
          <li>TW FB IG</li>
          <li>Books</li>
          <li>What If? 2</li>
          <li>WI? TE HT</li>
        </ul>
      </div>
    </>
  );
}
