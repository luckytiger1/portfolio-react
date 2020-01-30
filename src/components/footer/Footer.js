import React from 'react';
import './Footer.scss';
import { containerStyle } from '../header/Header';
import Container from 'react-bootstrap/Container';
import Navbar from '../navbar/Navbar';

export default function Footer(props) {
  return (
    <div style={containerStyle}>
      <Container>
        <footer>
          <Navbar title="footer" />
          <p className="footer__year">© 2020 Daniyar Ketebay</p>
        </footer>
      </Container>
    </div>
  );
}
