import { fireEvent, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('test of camponent GiftItem', () => { 

    test('should to match with the snapshot', () => {
        const { container } = render(<GifItem />)
    });
     
});
