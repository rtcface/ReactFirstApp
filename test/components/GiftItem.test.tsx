import { render, screen } from "@testing-library/react";
import React from "react";
import { GifItem } from "../../src/components/GifItem";
import { Gifs } from "../../src/types";

describe("test of camponent GiftItem", () => {
  const defaultProps: Gifs = {
    id: "2",
    title: "Avatars",
    url: "https://giphy.com/gifs/TOEIAnimationUK-goku-dragon-ball-super-broly-WOb8EeFziTQNE02WXs",
  };
  const { title, url } = defaultProps;

  test("should to match with the snapshot", () => {
    const { container } = render(<GifItem {...defaultProps} />);
    expect(container).toMatchSnapshot(); 
  });

  test("should show the image with url and the alt indicate", () => {
    render(<GifItem {...defaultProps} />);
    //screen.debug();
    const { src, alt } = screen.getByRole<HTMLImageElement>("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
    //  console.log(screen.getByRole<HTMLImageElement>('img').src);
  });

  test("should show the title", () => {
    
  });
});
