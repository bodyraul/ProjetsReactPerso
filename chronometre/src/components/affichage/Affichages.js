import React from 'react'
import './affichages.css'

export default function ({nbsecondes,nbminutes}) {

  const ajoutzero = ()=>{
    if(nbminutes<=9 && nbsecondes<=9){
      return(
        <p>0{nbminutes} : 0{nbsecondes}</p>
      )
    }
    else if(nbminutes<=9){
      return(
        <p>0{nbminutes} : {nbsecondes}</p>
      )
    }else if (nbsecondes <=9){
      return(
        <p>{nbminutes} : 0{nbsecondes}</p>
      )
    }
    return(
      <p>{nbminutes} : {nbsecondes}</p>
    ) 
  }

  return (
    <div id='containeraffichage'>
      {ajoutzero()}
    </div>
  )
}
