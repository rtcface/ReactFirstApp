import { useState, useEffect } from 'react'
import  getGifs  from '../helpers/getGifs'
import {Gifs, LoadGifts} from '../types';

interface useFetchGifs {
  images: Array<Gifs>
  isLoading: boolean
}


export const useFetchGifs = ( categorie:string ):useFetchGifs => {
 
  const [images, setImages] = useState<useFetchGifs["images"]>([]);
  const [isLoading, setIsLoading] = useState<useFetchGifs["isLoading"]>(true);

 const getImages = async () => {
   const newImages = await getGifs( categorie );
   setImages(newImages);
   setIsLoading(false);
 } 

  useEffect( () => { getImages(); }, []);


	return {
		images,
		isLoading
	}
}

