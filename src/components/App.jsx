import React, { Component, PropTypes } from 'react';

class App extends Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired,
      uid: PropTypes.string,
      userName: PropTypes.string
    };
  }

  pageContent() {
    return (React.cloneElement(this.props.children, {
      key: this.props.location.pathname
    }));
  }

  render() {
    let content = (
      <div>
        <main>
          { this.pageContent() }
        </main>
      </div>
    );

    return content;
  }
}

export default App;
