import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RaisedButton
          href="https://github.com/raycent/reactreduxfirebasestarter"
          target="_blank"
          label="Welcome to Firedux"
          primary={true}
          icon={<FontIcon className="fa fa-github" />}
        />
      </div>
    );
  }
}

export default App;
