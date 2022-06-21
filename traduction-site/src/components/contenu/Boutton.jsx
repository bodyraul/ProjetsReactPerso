import React from 'react'
import './contenu.css'
export default function Boutton(props) {

    const changerLangue = (mot)=>{
      props.changeLangue(mot);
  }

  return (
    <>
        <div onClick={()=>changerLangue("FR")} className='bouton'>Français</div>
        <div onClick={()=>changerLangue("ENG")} className='bouton2'>Anglais</div>
        <div onClick={()=>changerLangue("ESP")} className='bouton3'>Espagnol</div>
    </>
  )
}

