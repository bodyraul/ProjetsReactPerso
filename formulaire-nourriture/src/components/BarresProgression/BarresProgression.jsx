import React from 'react'
import Icones from './Icones'
import Barres from './Barres'
import './barreprogression.css'
import Barredeux from './Barredeux'

export default function BarresProgression({numero}) {
  
  return (
    <div className='progressionbarre'>
        <Barredeux index={numero}/>
        <Barres/>
        <Icones/>
        <Icones/> 
        <Icones/>
        <Icones/>
        <Icones/>
    </div>
  )
}
