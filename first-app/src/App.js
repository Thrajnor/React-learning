import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {_id:'d1dw1', name:'Marcin', age:21},
      {_id:'r12v3r2v3fr', name:'Natalia', age:18, hobbies:'Keyboarding'},
      {_id:'vr123r', name:'Tomek', age:25},
      {_id:'123fras', name:'Stefania', age:29},
    ],
    arePersonsVisible: false,
  }
  
  changeNameHandler = (event, _id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p._id === _id
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }


  hobbyCountHandler = (num) => {
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    let persons = null

    if(this.state.arePersonsVisible) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} 
                           name={person.name} 
                           age={person.age} 
                           key={person._id}
                           change={(event) => this.changeNameHandler(event, person._id)}>{this.hobbyCountHandler(index)}</Person>
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
