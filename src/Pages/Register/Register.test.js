import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from './Register';


describe('Register component', () => {
    test('renders without crashing', () => {
        render(<Register />);
    });
});