import React, { Component, PropTypes } from 'react';
import C from '../auth/constants';
// Styling
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';
// Icons
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app'
import Help from 'material-ui/svg-icons/action/help'

class Header extends Component {
  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired,
      userName: PropTypes.string,
      photoURL: PropTypes.string
    };
  }

  render() {
    let content = null;
    if (this.props.authStatus === C.LOGGED_IN) {
      content = <AppBar
        title="Firedux"
        iconElementRight={
          <IconMenu
            className='icon'
            iconButtonElement={<Avatar src={this.props.photoURL} />}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem leftIcon={<Help />} primaryText="Help" />
            <Divider />
            <MenuItem
              leftIcon={<ExitToApp />}
              primaryText="Log out"
              onClick={ this.props.logout }
            />
          </IconMenu>
        }
      />
    }

    return content;
  }
}

export default CSSModules(Header, styles);
