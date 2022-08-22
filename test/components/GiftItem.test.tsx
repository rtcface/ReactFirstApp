import { render } from "@testing-library/react";
import React from "react";
import { GifItem } from '../../src/components/GifItem';
import { Gifs } from "../../src/types";

describe('test of camponent GiftItem', () => { 
    
    test('should to match with the snapshot', () => {
        const defaultProps: Gifs = {
            id:"2",
            title:"Avatars",
            url:"https://giphy.com/gifs/TOEIAnimationUK-goku-dragon-ball-super-broly-WOb8EeFziTQNE02WXs"
        };
        const { container } = render(<GifItem { ...defaultProps }/>);
        expect( container ).toMatchSnapshot();
        
    });
     
});


