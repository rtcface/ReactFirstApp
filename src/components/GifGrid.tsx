import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

interface GifItemProps{
  categorie:string
}

export function GifGrid({categorie}:GifItemProps) {

  const { images, isLoading } = useFetchGifs( categorie );

  return (    
    <>
      {
        isLoading && ( <div className="lds-facebook"><div></div><div></div><div></div></div> )
      }
      <h3>{categorie}</h3>
      <div className='card-grid'>
        { 
          images.map( ( image ) => (
            <GifItem 
                key={ image.id }
                { ...image }
            /> 
          ))
        }        
      </div>
    </>
  );
}



