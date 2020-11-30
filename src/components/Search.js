import React,{useState} from 'react';

//searchText prop as a parameter 
const Search = ({searchText}) =>{
    const [text,setText]=useState('');
    
    //runs on Sumbit - preventdefault to stop refresh
    //searchText takes text as parameter
    const onSubmit=(e)=>{
        e.preventDefault(); 
        searchText(text);
    }

    //onSubmit value is used to setText
    return(
        <div className="search">
            <form onSubmit={onSubmit}>
                <input placeholder="Enter text here" type='text' onChange={e=>setText(e.target.value)}></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search;