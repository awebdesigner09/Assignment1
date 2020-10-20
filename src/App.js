import React, { Component } from 'react';

import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state={
    userName:'Default User Name'
  }

  nameChangedHandler = (event) => {
    this.setState(
      {userName:event.target.value}

    )

  }


  render() {
    return (
      <div className="App">
      <UserInput changed={this.nameChangedHandler} name={this.state.userName} />
      <UserOutput className="output" name={this.state.userName} />
      <UserOutput className="output" name={this.state.userName}/>
      </div>
    );
  }
}

export default App;
