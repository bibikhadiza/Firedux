import React, { Component, PropTypes } from 'react';
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
  }
};

export default Main;
