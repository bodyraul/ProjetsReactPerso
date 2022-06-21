import React, { useEffect } from 'react'
import './startstop.css'
import { useState } from 'react';



export default function ({nbsecondes,nbmichangeminutenutes,changeseconde}) {
  const [active, setactive] = useState(false);
  const [valueplaystop, setvalueplaystop] = useState("play")

  const playstop=()=>{
    setactive(!active);
    if(valueplaystop=="play"){
      setvalueplaystop("stop")
    }else if(valueplaystop=="stop"){
      setvalueplaystop("play")
    }
  }

 useEffect(()=>{
  let id;
    if(active){
      id=window.setInterval(()=>{
        changeseconde(nbsecondes=>nbsecondes-1);
      },1000)
    }
    return()=>{
      window.clearInterval(id)
    }
  },[active])


  return (
    <div id='containerstartstop'>
        <button onClick={playstop}>{valueplaystop}</button>
    </div>
  )
}
