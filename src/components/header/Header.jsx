import BurgerMenu from '../burgerMenu/BurgerMenu';
import NavList from '../navList/NavList';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <NavList isOpen={''} />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
