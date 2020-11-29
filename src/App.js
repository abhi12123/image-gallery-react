import React,{useState,useEffect} from 'react';
import Card from './components/Card';
import './App.css';
import Search from './components/Search';

function App() {
  const [images,setImages]=useState([]);
  const [term,setTerm]=useState('');

  useEffect(
    ()=>{
      fetch(`https://pixabay.com/api/?key=19313917-cad86abf6397bc4bbe909475e&q=${term}&image_type=photo`).
      then(response=>response.json()).
      then(data=>{
        setImages(data.hits)
      });
    },[term]
  );
  
  return (      
    <div>
      <Search searchText={(text)=>setTerm(text)}/>
      <div className="cards">
        {images.map(image =>(
          <Card key={image.id} image={image}/>
        ))}
      </div>
    </div>
  );
}

export default App;
