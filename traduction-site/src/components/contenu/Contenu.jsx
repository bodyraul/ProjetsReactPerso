import React from 'react'
import Titre from './Titre'
import Paragraphe from './Paragraphe'
import { useState } from 'react'
import Boutton from './Boutton'

export default function Contenu() {
  const [lang, setlang] = useState("ENG");
  return (
    <>
      <Boutton changeLangue={setlang}></Boutton>
      <Titre langue={lang}></Titre>
      <Paragraphe langue={lang}></Paragraphe>
    </>
  )
}
