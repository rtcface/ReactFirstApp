import { useState, useEffect } from 'react';    
import { GifGrid,AddCategory }  from './compounents';

interface SearchGif{
  categories: Array<string>
}

function SearchGift():JSX.Element {
  const INITIAL_STATE = ['Avengers','Movies'];
  const [categories, setCategories] = useState<SearchGif["categories"]>([]);

  useEffect(() => {
    setCategories(INITIAL_STATE);
  },[]);
  
const addCategorie = ( newCategory:string ) => {
  if ( categories.includes(newCategory) ) return;
  setCategories( [newCategory,...categories] );
  
};


  return (
    <>
      <h1>Buscador de gifs</h1>

      <AddCategory onNewCategories={ ( categorie:string ) => addCategorie(categorie) } />      
        {
          categories.map( item => <GifGrid key={item} categorie={item}/> ) 
      }

    </>
  );
}


export default SearchGift;
