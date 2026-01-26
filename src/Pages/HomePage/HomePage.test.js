import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';


describe('HomePage component', () => {
    test('renders without crashing', () => {
        render(<HomePage />);
    });
});