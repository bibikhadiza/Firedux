import React, { Component, PropTypes } from 'react';
import C from '../constants';
import LoginFormContainer from '../containers/LoginFormContainer';
// Styling
import RaisedButton from 'material-ui/RaisedButton';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';

class Main extends Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired
    };
  };

  render() {
    if (this.props.authStatus === C.LOGGED_IN) {
      return (
        <div>
          <RaisedButton
            label="Log out"
            primary={true}
            icon={<ExitToApp />}
            onClick={ this.props.logout }
          />
       </div>
      );
    } else {
      return (
        <div className="login-form">
          <LoginFormContainer />
        </div>
      );
    }
  }
};

export default Main;
