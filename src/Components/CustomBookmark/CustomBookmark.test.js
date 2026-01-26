import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomBookmark from './CustomBookmark';


describe('CustomBookmark component', () => {
    test('renders without crashing', () => {
        render(<CustomBookmark />);
    });
});