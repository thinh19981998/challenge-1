import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className='container'>
          <img src={logo} alt='' className={style['header-logo']} />
        </div>
      </header>
    </>
  );
}

export default Header;
