import React, { useState } from 'react'
import './bouttonsessionbreak.css'


export default function Bouttonsessionbreak({changeminute,nbsecondes,changeseconde}) {

  const [timesession, settimesession] = useState(40)

  const ajoutsession = ()=>{
    settimesession(timesession+5);
    changeminute(timesession+5);
    changeseconde(0);
  }

  const diminutionsession = ()=>{
    settimesession(timesession-5);
    changeminute(timesession-5);
    changeseconde(0);
  }


  return (
    <div id='containerbtnsessionbreak'>
        <button onClick={ajoutsession}>+</button>
          <p>{timesession}</p>
        <button onClick={diminutionsession}>-</button>

        
    </div>
  )
}
