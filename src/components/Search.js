import React,{useState} from 'react';

const Search = ({searchText}) =>{
    const [text,setText]=useState('');
    const onSubmit=(e)=>{
        e.preventDefault(); 
        searchText(text);
    }
    return(
        <form onSubmit={onSubmit}>
            <input type='text' onChange={e=>setText(e.target.value)}></input>
            <button type='submit'>Search</button>
        </form>
    )
}

export default Search;