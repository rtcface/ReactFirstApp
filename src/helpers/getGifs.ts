import {Gifs, Gifts} from "../types";

  
const getGifs = async ( categorie:string ):Promise<Gifs[]> => {    
    const api_key="6jSL6jTz9vo371PkEcQo3D6rnhHAn5Ay";
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${categorie}&limit=5`;
    const listCategories = await fetch(url);
    const { data } = await listCategories.json();

    const gifs = data.map( (img:Gifts) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }) )
    //console.log(gifs);
    return gifs;
  };

export default getGifs;
