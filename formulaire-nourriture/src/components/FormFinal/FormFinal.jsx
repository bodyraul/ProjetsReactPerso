import React from 'react'
import './formfinal.css'
import { useState } from 'react'

export default function FormFinal(props) {

  const [dataFormFinal, setdateFormFinal] = useState({
    pref:{
      love:"",
      hate:""
    }
  })
  console.log(dataFormFinal.pref.love);

  const modifdata =(e,pref)=>{
    if(pref=="pref"){
      setdateFormFinal({
        ...dataFormFinal,
        love:e.target.value
      })
      
    }else if(pref=="hate"){
      setdateFormFinal({
        ...dataFormFinal,
        hate:e.target.value
      })
      
    }
    const newdatas={
      ...props.afficheData,
      pref:dataFormFinal
    }
    props.modifData(newdatas);
  }

  return (
    <div id='containerFinal'>
        <form  action="">
            <p>
                liste moi les aliments que tu préfères et ceux que tu détestes :
            </p>
            <label htmlFor="">Liste des aliments préférés : </label>
            <textarea onChange={e=>modifdata(e,"pref")} name="pref" id="" cols="30" rows="13" placeholder='ex: fraise, pomme, poire etc..'></textarea>
            
            <label htmlFor="">Liste des aliments détestés : </label>
            <textarea onChange={e=>modifdata(e,"hate")} name="pref" id="" cols="30" rows="13" placeholder='ex: fraise, pomme, poire etc..'></textarea>
        </form>

        <button onClick={()=>props.switchindex(6)} >valider</button>

    </div>
  )
}
