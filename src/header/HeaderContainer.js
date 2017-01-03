import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../auth/actions';
import C from '../constants';

const mapStateToProps = (state, ownProps) => {
  return {
    authStatus: state.getIn(['auth', 'authStatus']),
    location: ownProps.location,
    userName: state.getIn(['auth', 'userName']),
    email: state.getIn(['auth', 'email']),
    photoURL: state.getIn(['auth', 'photoURL'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: e => {
      C.FIREBASE.auth().signOut().then(() => {
        dispatch(logout());
      });
    }
  };
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
