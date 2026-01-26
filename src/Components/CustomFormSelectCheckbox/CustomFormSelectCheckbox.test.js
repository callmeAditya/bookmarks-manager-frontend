import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomFormSelectCheckbox from './CustomFormSelectCheckbox';


describe('CustomFormSelectCheckbox component', () => {
    test('renders without crashing', () => {
        render(<CustomFormSelectCheckbox />);
    });
});