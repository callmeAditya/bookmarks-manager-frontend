import React from 'react';
import { render, screen } from '@testing-library/react';
import TemplateName from './TemplateName';


describe('TemplateName component', () => {
    test('renders without crashing', () => {
        render(<TemplateName />);
    });
});