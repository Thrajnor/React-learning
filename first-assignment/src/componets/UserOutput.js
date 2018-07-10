import React from 'react'

import '../App.css'

const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <h3>{props.userName} Says:</h3>
      <p>
        Cillum nostrud pariatur elit cillum ipsum incididunt laboris esse occaecat dolore nisi velit ad.
      </p>
      <p>
        Adipisicing consectetur exercitation anim dolor occaecat.
      </p>
    </div>
  )
}

export default UserOutput