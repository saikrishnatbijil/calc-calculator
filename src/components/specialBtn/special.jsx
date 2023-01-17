import React from 'react'
import './special.css'

function special(props) {
  return (
    <div onClick={() => props.func()} className='specialBack'> 
      <h2 className='specialValue'>{props.keyVal}</h2>
      {/* <button onClick={()=>props.func("1")}>Hello</button> */}
    </div>
  )
}

export default special