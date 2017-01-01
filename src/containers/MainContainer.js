import { connect } from 'react-redux';
import { logout } from '../actions';
import Main from '../components/Main';
import C from '../constants';

const mapStateToProps = state => {
  return {
    authStatus: state.getIn(['auth', 'authStatus'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: e => {
      e.preventDefault();
      C.FIREBASE.auth().signOut().then(() => {
        dispatch(logout());
      });
    }
  };
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
