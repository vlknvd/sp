import { useState } from 'react';
import './burgerMenu.scss';
import NavList from '../navList/NavList';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='burger-menu'>
      <button
        className={`burger-menu__button ${
          isOpen ? 'burger-menu__button--open' : ''
        }`}
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <NavList isOpen={isOpen ? 'navigation--visible' : ''} />
    </div>
  );
};

export default BurgerMenu;
