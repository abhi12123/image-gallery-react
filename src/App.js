import React,{useState,useEffect} from 'react';
import Card from './components/Card';
import './App.css';
import Search from './components/Search';

function App() {
  //an images array initialised with setImages function
  const [images,setImages]=useState([]);
  //emptry string term initialised with setTerm function
  const [term,setTerm]=useState('');

  //the function inside useEffect renders every time the second argument ie term changes
  useEffect(
    //fetches API with given term and changes images array with data.hits array
    ()=>{
      fetch(`https://pixabay.com/api/?key=19313917-cad86abf6397bc4bbe909475e&q=${term}&image_type=photo`).
      then(response=>response.json()).
      then(data=>{
        setImages(data.hits)
      });
    },[term]
  );
  
  //search component and card component is added
    //search component has prop searchText. it sets term value from prop text using setTerm
    //each image is mapped onto cards
    //card has props image.id and the image
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
