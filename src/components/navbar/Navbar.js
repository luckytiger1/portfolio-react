import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`${props.title}__nav`}
      style={
        props.title === 'header' ? navbarHeaderStyle : { textAlign: 'right' }
      }
    >
      <Link className="nav__link" to="/about">
        About
      </Link>

      {/* <a href="/" className="nav__link"> */}
      <Link className="nav__link" to="/">
        Portfolio
      </Link>
      {/* </a> */}
    </nav>
  );
}

const navbarHeaderStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '60px',
};
