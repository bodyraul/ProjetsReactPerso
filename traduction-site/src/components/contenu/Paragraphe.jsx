import React from 'react'
import Text from '../objet/Text'

// {Text[props.langue].paragraphe} equivaut à {Text["FR"].paragraphe} qui équivaut à {Text.FR.paragraphe} 
// ici on préfère {Text["FR"].paragraphe} car on récupe un string dans le useState
export default function Paragraphe(props) {
  return (
    <p className='paragraphe'>
        {Text[props.langue].paragraphe}
    </p>
  )
}
