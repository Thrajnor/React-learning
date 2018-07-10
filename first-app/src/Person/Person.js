import React from 'react'

import '../App.css'

const person = (props) => {
  return (
      <div className='person'>
        <p onClick={props.click}>i'm a {props.name} and i'm {props.age} years old</p>
        {props.children}
        <input onChange={props.change} value={props.name} />
      </div>
    )
}

export default person