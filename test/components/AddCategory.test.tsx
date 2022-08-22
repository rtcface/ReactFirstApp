import { render,screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';
describe('Test of <AddCategory>', () => { 

    test('Should change value of text field', () => {
        render(<AddCategory/>);
        screen.debug();
    });



 })