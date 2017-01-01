import React, { PropTypes } from 'react';
import C from '../constants';
import SigninBtns from './SigninBtns';
// Styling
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

const LoginForm = ({ authStatus, onLoginBtnClick }) => {
  let content = null;
  if (authStatus !== C.LOGGED_IN) {
    content = (
      <Card>
        <CardTitle title='React Redux Firebase Project' />
        <CardText>
          A short overview of the project (but longer is fine).
        </CardText>
        <CardActions className='LoginBtns'>
          <SigninBtns handleClick={onLoginBtnClick} />
        </CardActions>
      </Card>
    );
  }

  return content;
};

LoginForm.propTypes = {
  authStatus: PropTypes.string.isRequired,
  onLoginBtnClick: PropTypes.func.isRequired
};

export default LoginForm;
