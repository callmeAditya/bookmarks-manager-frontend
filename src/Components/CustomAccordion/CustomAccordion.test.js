import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomAccordion from './CustomAccordion';


describe('CustomAccordion component', () => {
    test('renders without crashing', () => {
        render(<CustomAccordion />);
    });
});