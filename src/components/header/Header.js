import React from 'react';
import './Header.scss';
import Navbar from '../navbar/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <div className="header-container" style={containerStyle}>
      <Container>
        <header className="header">
          <Navbar title="header" />
          <div className="header__info">
            <div className="text">
              Hello I'm <span className="highlight">Daniyar Ketebay</span>. I'm
              a front-end developer.
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
}

export const containerStyle = {
  padding: '50px 10px',
  background: 'linear-gradient(135deg,#005585,#ff4d61,#4dbeff,#00a2ff,#265f80)',
  backgroundSize: '500% 100%',
  animation: 'Gradient 30s ease infinite',
};
