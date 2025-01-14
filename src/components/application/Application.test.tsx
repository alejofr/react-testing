import React from 'react';
import { expect,  describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {

    /** getByRole */
    test('Render Correctly getByRole', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        })
        expect(pageHeading).toBeInTheDocument()
    
        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        })
        expect(sectionHeading).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
    });

    /** getByLabelText */
    test('Render Correctly getByLabelText', () => {
        render(<Application />);

        const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
        expect(nameElement2).toBeInTheDocument()

        const termsElement2 = screen.getByLabelText(
        'I agree to the terms and conditions'
        )
        expect(termsElement2).toBeInTheDocument()
    });

    /** getByPlaceholderText */
    test('Render Correctly getByPlaceholderText', () => {
        render(<Application />);
        const nameElement3 = screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument()
    });

    /** getByText */
    test('Render Correctly getByText', () => {
        render(<Application />);
        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()
    });

    /** getByDisplayValue */
    test('Render Correctly getByDisplayValue', () => {
        render(<Application />);
        const nameElement4 = screen.getByDisplayValue('Vishwas')
        expect(nameElement4).toBeInTheDocument()
    });

    /** getByAltText */
    test('Render Correctly getByAltTex', () => {
        render(<Application />);
        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument()
    });

    /** getByAltText */
    test('Render Correctly getByTitle', () => {
        render(<Application />);
        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()
    });

    /** getByTestId */
    test('Render Correctly getByTestId', () => {
        render(<Application />);
        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()
    });
})