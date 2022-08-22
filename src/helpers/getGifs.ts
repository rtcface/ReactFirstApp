import fetch from 'cross-fetch';
import {Gifs, Gifts, DataGifts} from "../types";

  
const getGifs = async ( categorie:string ):Promise<Gifs[]> => {    
    const api_key="iB6qWLmc5Mtbl3XhY2IMhVs9C14Hj77y";
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${categorie}&limit=5`;
    const listCategories = await fetch(url);
    const { data }:DataGifts = await listCategories.json();

    const gifs = data.map( (img:Gifts) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }) )
    //console.log(gifs);
    return gifs;
  };

export default getGifs;
