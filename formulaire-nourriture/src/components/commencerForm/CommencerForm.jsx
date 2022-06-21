import React from 'react'
import './commencerForms.css'
import Intro from './Intro'
import BouttonCommencer from './BouttonCommencer'

export default function CommencerForm(props) {
  return (
    <>
        <div className='paraStart'>
            <Intro/>
            <BouttonCommencer switchindex={props.switchindex}/>
        </div>
    </>
  )
}
