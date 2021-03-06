import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';

import './header.css';

function Header({ disableSettings }) {
  return (
    <header>
      <nav id='top-nav'>
        <Link className='home-link' to='/'>
          <NavLogo />
        </Link>
        {disableSettings ? null : <FCCSearch />}
        <ul id='top-right-nav'>
          <li>
            <Link to='/learn'>Curriculum</Link>
          </li>
          <li>
            <a
              href='/forum'
              rel='noopener noreferrer'
              target='_blank'
              >
              Forum
            </a>
          </li>
          <li>
            <a
              href='/news'
              rel='noopener noreferrer'
              target='_blank'
              >
              News
            </a>
          </li>
          <li className='user-state-link'>
            <UserState disableSettings={disableSettings} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  disableSettings: PropTypes.bool
};
export default Header;
