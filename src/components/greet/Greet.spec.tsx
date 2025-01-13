import React from 'react';
import { expect,  it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

describe('Greet', () => {
    it('Render Greet correctly', () => {
        render(<Greet /> );
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    });
    
    it('Render with name', () => {
        const name = 'Abraham';
        render(<Greet name={name} />);
        const textElement = screen.getByText(`Hello ${name}`);
        expect(textElement).toBeInTheDocument();
    })
})

