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
            <h1>Daniyar Ketebay</h1>
            <h4>Front-End Developer</h4>
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
