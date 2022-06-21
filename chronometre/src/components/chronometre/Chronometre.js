import React from 'react'
import './chronometre.css'
import SessionBreak from '../sessionBreak/SessionBreak'
import Bouttonsessionbreak from '../bouttonsessionbreak/Bouttonsessionbreak'
import Affichages from '../affichage/Affichages'
import Startstop from '../demarrerStop/Startstop'
import { useState } from 'react'

export default function Chronometre() {
  const [minutes, setminutes] = useState(1);
  const [secondes, setsecondes] = useState(0);

  if(secondes<0){
    setsecondes(59)
    setminutes(minutes-1)
  }

  if(minutes==0 & secondes==0){
    setminutes(40);
    setsecondes(0);
  }
  
  return (
    <div id="containerchrono">
        <SessionBreak/>
        <Bouttonsessionbreak changeseconde={setsecondes} nbsecondes={secondes} changeminute={setminutes} />
        <Affichages nbsecondes={secondes}  nbminutes={minutes}/>
        <Startstop nbsecondes={secondes} changeseconde={setsecondes} changeminute={setminutes} nbminutes={minutes}/>
    </div>
  )
}
