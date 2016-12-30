import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Face from 'material-ui/svg-icons/action/face';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RaisedButton
          label="Welcome to React"
          labelPosition="after"
          primary={true}
          icon={<Face />}
        />
      </div>
    );
  }
}

export default App;
