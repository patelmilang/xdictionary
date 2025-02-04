import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchText,setSearchText]=useState('');
  const [definition,setDefinition]=useState('');

  const data=
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ];  

  const handleChange=(e)=>{
    const seachVal=e.target.value;

    setSearchText(seachVal);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(searchText){

      const result=data.filter((item,index)=>{
        return item.word.toLocaleLowerCase()==searchText.toLocaleLowerCase()
      });
      console.log(result);
      if(result.length>0){
        
        setDefinition(result[0].meaning);
      }
      else
      setDefinition('Word not found in the dictionary.')

    }else{
      setDefinition('');
    }


  }

  return (
    <div className="App">
       <h1>Dictionary App</h1>
       <div>
        <input type='text' placeholder='Search for word' name='search' value={searchText}
         onChange={(e)=>handleChange(e)} />
        <button value='search' name="btnsearch" onClick={(e)=>handleSubmit(e)} >Search</button>
        <h3>Definition:</h3> <p>{definition}</p>
       </div>
    </div>
  );
}

export default App;
