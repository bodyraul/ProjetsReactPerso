import React from 'react'
import './slider.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Fleches from '../Fleches/Fleches';

export default function Slider() {

  const imageId = [{id:uuidv4()},{id:uuidv4()},{id:uuidv4()},{id:uuidv4()},{id:uuidv4()}]
  const [element,setElement]=useState(1);
  const directionfleche=['droite','gauche']

  const leftSlide=()=>{
    if(element!=1){
      setElement(element-1)
    }
    else if(element==1){
      setElement(5)
    }
  }

  const rightSlide=()=>{
    if(element!=imageId.length){
      setElement(element+1)
    }
    else if(element==imageId.length){
      setElement(1)
    }
  }

  const changementelement=(index)=>{
    setElement(index)
  }
  return (
    
    <div className='containerSlide'>
        {imageId.map((item,index)=>{
            return(
              
              <img   key={item.id} className={element==index+1?"active contenuSlide":"desactive contenuSlide"} src={`./imageSlide/image${index+1}.jpg`} alt="" />
              
            )
        })}
        <Fleches fonction={rightSlide} direction={directionfleche[0]}></Fleches>
        <Fleches fonction={leftSlide} direction={directionfleche[1]}></Fleches>
        <div className='rond'>
            <div onClick={()=>changementelement(1)} className={element==1?"rond-anim":'rond-notanim'}></div>
            <div onClick={()=>changementelement(2)} className={element==2?"rond-anim":'rond-notanim'}></div>
            <div onClick={()=>changementelement(3)} className={element==3?"rond-anim":'rond-notanim'}></div>
            <div onClick={()=>changementelement(4)} className={element==4?"rond-anim":'rond-notanim'}></div>
            <div onClick={()=>changementelement(5)} className={element==5?"rond-anim":'rond-notanim'}></div>
        </div>
    </div>

  )
}
