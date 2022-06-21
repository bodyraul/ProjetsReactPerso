import React from 'react'
import './fromtrois.css'

export default function FormTois(props) {

    const preventdefaut=e=>{
        e.preventDefault();
    }


    const changeData=(e)=>{
        const newData={...props.afficheData}

        if(newData.alergies == ""){
            newData.alergies.push(e.target.value);
            console.log(newData);
        }else if(newData.alergies!=""){
            newData.alergies.forEach(element => {
                if(element==e.target.value){
                    const change = newData.alergies.filter((element)=>element!=e.target.value)
                    newData.alergies=change;
                    
                }else if(element!=e.target.value){
                    newData.alergies.push(e.target.value);
                }
            });
        }  
        var sans_doublons = Array.from(new Set(newData.alergies));
        newData.alergies=sans_doublons;
        
        props.modifData(newData);
    }



  return (
    <div id='containerTrois'>
        <form onSubmit={preventdefaut} action="">
            <p>Avez-vous des allergies ?</p>

            <label htmlFor="Lait">Lait</label>
            <input onChange={changeData}  type="checkbox"   value='Lait' />
            <br/>

            <label htmlFor="Pollen">Pollen</label>
            <input onChange={changeData}  type="checkbox"   value='Pollen'/>
            <br/>

            <label htmlFor="Oeuf">Oeuf</label>
            <input onChange={changeData}  type="checkbox"  value='Oeuf'/>
            <br/>

            <label htmlFor="Noix">Noix</label>
            <input onChange={changeData}  type="checkbox"   value='Noix'/>

            <label htmlFor="FruitDeMer">Fruit de mer</label>
            <input onChange={changeData}  type="checkbox"   value='Fruit de mer'/>

            <button onClick={()=>props.switchindex(5)} >valider</button>
            
            
        </form>
   </div>
  )
}
