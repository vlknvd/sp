import './navList.scss';

const NavList = ({ isOpen }) => {
  return (
    <nav className={`navigation ${isOpen}`}>
      <ul className='navigation__list'>
        <li className='navigation__item sp-text-sm'>
          <a href='#about'>О нас</a>
        </li>
        <li className='navigation__item sp-text-sm'>
          <a href='#assortment'>Ассортимент</a>
        </li>
        <li className='navigation__item sp-text-sm'>
          <a href='#adv'>Наши преимущества</a>
        </li>
        <li className='navigation__item sp-text-sm'>
          <a href='#contact'>Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
