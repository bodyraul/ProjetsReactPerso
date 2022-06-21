import React from 'react'
import './formdeux.css'

export default function FormDeux(props) {

    const preventdefaut=e=>{
        e.preventDefault();
    }

    const changeData=(e)=>{
        const newData={...props.afficheData}

        if(newData.foodstyle == ""){
            newData.foodstyle.push(e.target.value);
            console.log(newData);
        }else if(newData.foodstyle!=""){
            newData.foodstyle.forEach(element => {
                if(element==e.target.value){
                    const change = newData.foodstyle.filter((element)=>element!=e.target.value)
                    newData.foodstyle=change;
                    
                }else if(element!=e.target.value){
                    newData.foodstyle.push(e.target.value);
                }
            });
        }  
        var sans_doublons = Array.from(new Set(newData.foodstyle));
        newData.foodstyle=sans_doublons;
        
        props.modifData(newData);
    }

  return (
    <div id='containerDeux'>
        <form onSubmit={preventdefaut} action="">
            <p>quelles sont tes cuisines préférées ?</p>

            <label htmlFor="Italienne">Italienne</label>
            <input onChange={changeData} type="checkbox"   value='Italienne' />
            <br/>

            <label htmlFor="Japonnais">Japonnais</label>
            <input onChange={changeData} type="checkbox"   value='Japonnais'/>
            <br/>

            <label htmlFor="Française">Française</label>
            <input onChange={changeData} type="checkbox"   value='Française'/>
            <br/>

            <label htmlFor="Chinoise">Chinoise</label>
            <input onChange={changeData} type="checkbox"   value='Chinoise'/>

            <button onClick={()=>props.switchindex(4)}>valider</button>
            
            
        </form>
   </div>
  )
}
