import React from 'react'
import './Affichagefinal.css'
import { useEffect } from 'react'
import { useState } from 'react'


export default function AffichageFinal(props) {
  
  const  [phrase1, setphrase1] = useState("");
  const  [phrase2, setphrase2] = useState("");
  useEffect(()=>{
    setphrase1(props.afficheData.foodstyle.join(", "));
    setphrase2(props.afficheData.alergies.join(", "));
    
  },[])

  return (
    <>
        <p>D'après notre questionnaire, vos préférences culinaires sont les suivantes :</p>
        {props.afficheData.diet? <p> régime alimentaire : {props.afficheData.diet}</p>:<p> régime alimentaire : non mentionné. </p>}
        {phrase1? <p> Cuisine préférées : {phrase1}</p>:<p> Cuisines préférées : non mentionnées. </p>}
        {phrase2? <p> Alergie : {phrase2}</p>:<p> Alergies : non mentionnées.</p>}
        {props.afficheData.pref.love? <p> Vos préférences : {props.afficheData.pref.love}</p>: <p> Vos préférences : non mentionnées.</p>}
        {props.afficheData.pref.hate?  <p> Ce que vous n'aimez pas : {props.afficheData.pref.hate}</p>:  <p> Ce que vous n'aimez pas : non mentionné.</p>}
        
    </>
  
    
  )
}
