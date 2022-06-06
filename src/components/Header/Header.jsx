import './Header.scss';
import {NavLink} from 'react-router-dom';
import UserLineIcon from 'remixicon-react/UserLineIcon';

const Header = () => {
  return (
    <header className='header bg-block'>
      <div className="header__container flex item-center mr-auto ml-auto">
        <h3 className=''>Title</h3>
        <nav className="header__nav flex ml-auto">
          <ul className='ls-none flex'>
            <li><NavLink className='header__nav__link pt-2 pb-2 pl-1 pr-1' to='/'>Item 1</NavLink></li>
            <li><NavLink className='header__nav__link pt-2 pb-2 pl-1 pr-1' to='a'>Item 2</NavLink></li>
            <li><NavLink className='header__nav__link pt-2 pb-2 pl-1 pr-1' to='b'>Item 3</NavLink></li>
          </ul>
        </nav>
        <UserLineIcon className='ml-1'/>
      </div>
    </header>  
  );
};

export default Header;