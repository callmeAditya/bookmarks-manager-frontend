import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';


describe('LoginPage component', () => {
    test('renders without crashing', () => {
        render(<LoginPage />);
    });
});