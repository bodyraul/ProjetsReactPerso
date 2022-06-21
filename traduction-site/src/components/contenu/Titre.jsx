import React, { Fragment } from 'react'
import './contenu.css'
import Text from '../objet/Text'

export default function Titre(props) {
  
  return (
    <div className='divTitre'>
        {Text[props.langue].titre}
    </div>
  )
}

