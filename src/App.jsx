import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header/HeaderContainer';
import Footer from './footer/Footer';
import Loader from './loader/components/Loader';
import C from './auth/constants';

class App extends Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired,
      uid: PropTypes.string,
      userName: PropTypes.string
    };
  }

  pageContent() {
    if (!this.props.dataLoading) {
      return React.cloneElement(this.props.children, {
        key: this.props.location.pathname
      });
    };
    return <Loader />;
  }

  render() {
    console.log(this.props.authStatus);
    if (this.props.authStatus !== C.LOGGING_IN) {
      return (
        <div>
          <HeaderContainer location={ this.props.location } />

          <main>
            { this.pageContent() }
          </main>

          <Footer />
        </div>
      );
    };

    return <Loader />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    authStatus: state.getIn(['auth', 'authStatus']),
    dataLoading: state.get('dataLoading')
  };
};

export default connect(mapStateToProps)(App);
