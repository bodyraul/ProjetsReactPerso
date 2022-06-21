import React from 'react'
import './formun.css'


// dans les radios si le name est le meme ca permet de ne cliquer que sur un seul boutton
export default function FormUn(props) {

    const preventdefaut=e=>{
        e.preventDefault();
    }

    const changerData=(e)=>{
        const newData= {...props.afficheData}
        newData.diet=e.target.value;
        props.modifData(newData);
    }

  return (
   <div id='containerUn'>
        <form onSubmit={preventdefaut} action="">
            <p>quel est ton regime alimentaire ?</p>

            <label htmlFor="Vegetarien">Végétarien</label>
            <input onChange={changerData} type="radio" name="regime" id='Vegetarien' value='Vegetarien' />
            <br/>

            <label htmlFor="Vegan">Vegan</label>
            <input onChange={changerData} type="radio" name="regime" id='Vegan' value='Vegan'/>
            <br/>

            <label htmlFor="Frugivore">Frugivore</label>
            <input onChange={changerData} type="radio" name="regime" id='Frugivore' value='Frugivore'/>
            <br/>

            <label htmlFor="aucun">Aucun régime en particulier</label>
            <input onChange={changerData} type="radio" name="regime" id='aucun' value='aucun'/>

            <button onClick={()=>props.switchindex(3)}>valider</button>
            
            
        </form>
   </div>
  )
}
