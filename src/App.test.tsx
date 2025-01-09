import React from 'react';
import { expect,  test } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Click on the Vite and React logos to learn more', () => {
    render(<App /> );
    const pElement = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(pElement).toBeInTheDocument();
});