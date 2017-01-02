import React from 'react';
require('./SigninBtns.scss');

const SigninBtns = props => {
  return (
    <div>
      <div className="btn-group">
        <a className="btn btn-danger disabled">
          <i className="fa fa-google" />
        </a>
        <a className="btn btn-danger"
           onClick={ e => props.handleClick(e, 'google')}>
          Sign in with Google
        </a>
      </div>

      <div className="btn-group">
        <a className="btn btn-primary disabled">
          <i className="fa fa-facebook" />
        </a>
        <a className="btn btn-primary"
           onClick={ e => props.handleClick(e, 'facebook')}>
          Sign in with Facebook
        </a>
      </div>

      <div className="btn-group">
        <a className="btn btn-info disabled">
          <i className="fa fa-twitter" />
        </a>
        <a className="btn btn-info"
           onClick={ e => props.handleClick(e, 'twitter')}>
          Sign in with Twitter
        </a>
      </div>

      <div className="btn-group">
        <a className="btn btn-github disabled">
          <i className="fa fa-github" />
        </a>
        <a className="btn btn-github"
           onClick={ e => props.handleClick(e, 'github')}>
          Sign in with Github
        </a>
      </div>
    </div>
  );
};

export default SigninBtns;
