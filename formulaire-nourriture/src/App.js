import './App.css'
import BarresProgression from './components/BarresProgression/BarresProgression';
import CommencerForm from './components/commencerForm/CommencerForm';
import React from 'react';
import { useState } from 'react';
import FormUn from './components/fromUn/FormUn';
import FormDeux from './components/FormDeux/FormDeux';
import FormTois from './components/FormTrois/FormTois';
import FormFinal from './components/FormFinal/FormFinal';
import AffichageFinal from './components/AffichageFinal/AffichageFinal';

function App() {

  const  [index, setindex] = useState(1);


  const mofifierIndex=(index)=>{
    setindex(index);
  }

  const  [dataForm, setdataForm] = useState({
    diet:"",
    foodstyle:[],
    alergies:[],
    pref:{love:"",
          hate:""
  }

});
console.log(dataForm);

  return (
    <div className="App">
        <BarresProgression numero={index}/>
        { index === 1 ? <CommencerForm switchindex={mofifierIndex}/> 
        : index === 2 ? <FormUn afficheData={dataForm} modifData={setdataForm} switchindex={mofifierIndex}/>
        : index === 3 ? <FormDeux afficheData={dataForm} modifData={setdataForm} switchindex={mofifierIndex}/>
        : index === 4 ? <FormTois afficheData={dataForm} modifData={setdataForm} switchindex={mofifierIndex}/>
        : index === 5 ? <FormFinal afficheData={dataForm} modifData={setdataForm} switchindex={mofifierIndex}/>
        : index === 6 ? <AffichageFinal afficheData={dataForm} modifData={setdataForm} switchindex={mofifierIndex}/>
        :""
      }
    </div>
  );
}

export default App;
