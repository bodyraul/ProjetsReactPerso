import React from 'react'
import './fleches.css'
import { useState } from 'react'
import leftArrow from'./iconesFleche/left-arrow.svg'
import rightArrow from'./iconesFleche/right-arrow.svg'


export default function Fleches(props) {
  console.log(props.direction)
  return (
    <button onClick={props.fonction}>
      <img className={props.direction=='droite'?"fleche-droite":"fleche-gauche"} 
      src={props.direction=='droite'?rightArrow:leftArrow}  alt="" />
   
    </button>
  )
}
