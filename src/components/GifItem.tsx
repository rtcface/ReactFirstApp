 
import { Gifs } from "../types";

export function GifItem({ title,url }:Gifs):JSX.Element {
	return (
	<div className='card'>
		<img src={ url } alt={ title } />	
		<p>{title}</p>
		</div>
	);
}

