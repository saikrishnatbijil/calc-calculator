import React from 'react'
import './normal.css'

function normal(props) {
  return (
    <div onClick={() => props.func()} className='normalBack'> 
      <h2 className='normalValue'>{props.keyVal}</h2>
      {/* <button onClick={()=>props.func("1")}>Hello</button> */}
    </div>
  )
}

export default normal