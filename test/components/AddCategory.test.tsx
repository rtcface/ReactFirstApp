import { fireEvent, render,screen } from '@testing-library/react';
import React from 'react';
import { AddCategory } from '../../src/components';
describe('Test of <AddCategory>', () => { 

    test('Should change value of text field', () => {
        render(<AddCategory onNewCategories={function (categoryName: string): void {
            throw new Error('Function not implemented.');
        } }/>);
        const input = screen.getByRole<HTMLInputElement>('textbox');
        fireEvent.input( input, { target: { value: 'hero-man' } } );
        expect( input.value ).toBe('hero-man');
        //screen.debug();
    });

    test('Should call onNewCategories if the input have values', () => {
        const inputValue = 'hero-man';
        const onNewCategories = jest.fn();

        render( <AddCategory onNewCategories={ onNewCategories } />  );

        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe('');
        expect( onNewCategories ).toHaveBeenCalled();
        expect( onNewCategories ).toHaveBeenCalledTimes(1);
        
        
    });



 })