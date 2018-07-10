import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:'Marcin', age:21},
      {name:'Natalia', age:18, hobbies:'Keyboarding'},
      {name:'Tomek', age:25},
      {name:'Stefania', age:29},
    ],
    arePersonsVisible: false,
  }

  switchNameHandler = (newName) => {
    if(typeof newName !== 'string') {
      newName = 'Stefan'
    }
    
    if(this.state.persons[2].name === 'Tomek') {
      this.setState({
        persons: [
          {name:'Marcin', age:21},
          {name:'Natalia', age:18, hobbies:'Keyboarding'},
          {name: newName, age:25},
          {name:'Stefania', age:29},
        ]
      })
    } else {
      this.setState({
        persons: [
          {name:'Marcin', age:21},
          {name:'Natalia', age:18, hobbies:'Keyboarding gonciarz and cebula'},
          {name:'Tomek', age:25},
          {name:'Stefania', age:29},
        ]
      })
    }
  }
  
  changeNameHandler = (event) => {

    this.setState({
      persons: [
        {name:'Marcin', age:21},
        {name:'Natalia', age:18, hobbies:'Keyboarding'},
        {name:'Tomek', age:25},
        {name: event.target.value, age:29},
      ]
    })
  }


  hobbyStateHandler = (num) => {
    let hobbies = this.state.persons[num].hobbies
    if (hobbies !== undefined) {
      if (((hobbies.match(/,/g) || []).length) > 0 ||
          ((hobbies.match(/and/g) || []).length) > 0 ||
          ((hobbies.match(/&/g) || []).length) > 0 ){
        return <p>My hobbies are: {hobbies} </p>
      } else {
        return <p>My hobby is: {hobbies}</p>
      }
    }
  } 
  
  showPersonsHandler = () => {
    this.setState({
      arePersonsVisible: !this.state.arePersonsVisible,
    })
  }
// 
  // <Person name={this.state.persons[0].name} 
  // age={this.state.persons[0].age}> 
// {this.hobbyStateHandler(0)}</Person>
// <Person name={this.state.persons[1].name} 
  // age={this.state.persons[1].age}>
// {this.hobbyStateHandler(1)}</Person>
// <Person name={this.state.persons[2].name} 
  // age={this.state.persons[2].age} 
  // click={this.switchNameHandler.bind(this, 'Stefanek ?')}> 
// {this.hobbyStateHandler(2)}</Person>
// <Person name={this.state.persons[3].name} 
  // age={this.state.persons[3].age}
  // change={this.changeNameHandler}> 
// {this.hobbyStateHandler(3)}</Person>

  render() {
    let persons = null

    if(this.state.arePersonsVisible) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}>{person.hobbies}</Person>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>hi i'am your app</h1>
        <button className='btn' onClick={this.showPersonsHandler}>Show Content !</button>
        {persons}
      </div>
    );
  }
}

export default App;
