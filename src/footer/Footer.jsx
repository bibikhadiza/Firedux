import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        © <a href='https://github.com/raycent/firedux'
             target='_blank'> FIREDUX</a> 2016. Made with 🍀 by
        <a href='https://www.linkedin.com/in/raycenttan'
           target='_blank'> Raycent Tan</a>
      </footer>
    );
  }
}

export default CSSModules(Footer, styles);
