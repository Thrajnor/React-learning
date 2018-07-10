import React from 'react'

const UserInput = (props) => {
  return (
    <div>
      <h4>Change Name:</h4>
      <input className='UserInput' type='text' onChange={props.change} value={props.userName}/>
    </div>
  )
}

export default UserInput