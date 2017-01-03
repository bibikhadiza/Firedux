import React, { Component, PropTypes } from 'react';

class Main extends Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired
    };
  };

  render() {
    return (
      <div>
        Hello World!
     </div>
    );
  }
};

export default Main;
