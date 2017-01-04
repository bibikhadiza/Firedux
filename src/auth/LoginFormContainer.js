import firebase from 'firebase';
import { connect } from 'react-redux';
import { loginRequest } from './actions';
import LoginForm from './components/LoginForm';
import C from '../constants'; // firebase

const mapStateToProps = state => {
  return {
    authStatus: state.getIn(['auth', 'authStatus'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginBtnClick: (e, method) => {
      e.preventDefault();
      dispatch(loginRequest(method));

      let authProvider = null;

      switch (method) {

        case 'google':
          authProvider = new firebase.auth.GoogleAuthProvider();
          break;

        case 'facebook':
          authProvider = new firebase.auth.FacebookAuthProvider();
          break;

        case 'twitter':
          authProvider = new firebase.auth.TwitterAuthProvider();
          break;

        case 'github':
          authProvider = new firebase.auth.GithubAuthProvider();
          break;

        default:
          break;
      }

      C.FIREBASE.auth().signInWithRedirect(authProvider).then(dispatch(loginRequest()));
    }
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
