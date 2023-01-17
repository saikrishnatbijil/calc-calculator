import React from 'react'
import './main.css'

function main(props) {
  return (
    <div onClick={() => props.func()} className='mainBack'> 
      <h2 className='value'>{props.keyVal}</h2>
    {/* <button onClick={()=>props.func("1")}>Hello</button> */}
    </div>
  )
}

export default main