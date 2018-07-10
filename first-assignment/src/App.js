import React, { Component } from 'react';
import './App.css';
import UserOutput from './componets/UserOutput';
import UserInput from './componets/UserInput';

class App extends Component {
  state = {
    Users: [
      {userName:'Max',},
      {userName:'Thomas',},
      {userName:'Maria',},
    ]
  }

  changeUserNameHandler = (event) => {
    this.setState({
      Users: [
        {userName: event.target.value,},
        {userName:'Thomas',},
        {userName:'Maria',},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeUserNameHandler} userName={this.state.Users[0].userName}></UserInput>
        <UserOutput userName={this.state.Users[0].userName}></UserOutput>
        <UserOutput userName={this.state.Users[1].userName}></UserOutput>
        <UserOutput userName={this.state.Users[2].userName}></UserOutput>
      </div>
    );
  }
}

export default App;
