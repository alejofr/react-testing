import React from 'react';
import { expect,  test } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

test('Renders Greet correctly', () => {
    render(<Greet /> );
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
});

test('Greet render with name', () => {
    const name = 'Abraham';
    render(<Greet name={name} />);
    const textElement = screen.getByText(`Hello ${name}`);
    expect(textElement).toBeInTheDocument();
})