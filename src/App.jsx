import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header/HeaderContainer';
import CSSModules from 'react-css-modules';
import styles from './App.scss';

class App extends Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired,
      uid: PropTypes.string,
      userName: PropTypes.string
    };
  }

  pageContent() {
    return (React.cloneElement(this.props.children, {
      key: this.props.location.pathname
    }));
  }

  render() {
    let content = (
      <div>
        <HeaderContainer location={ this.props.location } />

        <main>
          { this.pageContent() }
        </main>

        <footer>
          © <a href='https://github.com/raycent/firedux'
               target='_blank'> FIREDUX</a> 2016. Made with 🍀 by
          <a href='https://www.linkedin.com/in/raycenttan'
             target='_blank'> Raycent Tan</a>
        </footer>
      </div>
    );

    return content;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    authStatus: state.getIn(['auth', 'authStatus'])
  };
};

export default CSSModules(connect(mapStateToProps)(App), styles);
