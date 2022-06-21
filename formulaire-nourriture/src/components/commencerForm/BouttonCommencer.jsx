import React from 'react'
import './commencerForms.css'

export default function BouttonCommencer(props) {
  return (
    <>
      <button onClick={()=>props.switchindex(2)}  id='boutonCommencer'>COMMENCER</button>
    </>
  )
}

