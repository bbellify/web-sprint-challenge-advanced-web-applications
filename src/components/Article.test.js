import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';



test('renders component without errors', ()=> {
    const testArticle = {
        headline: 'headline',
        author: 'person',
        summary: 'some stuff',
        body: 'more content'
    }

    const fakeDelete = jest.fn()
    const fakeEdit = jest.fn()

    render(<Article article={testArticle} handleDelete={fakeDelete} handleEditSelect={fakeEdit}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {

    const testArticle = {
        headline: 'headline',
        author: 'person',
        summary: 'some stuff',
        body: 'more content'
    }

    render(<Article article={testArticle} />)

    const headline = screen.queryByText(/headline/i)
    const author = screen.queryByText(/person/i)
    const summary = screen.queryByText(/some stuff/i)
    const body = screen.queryByText(/more content/i)

    expect(headline).toBeTruthy()
    expect(author).toBeTruthy()
    expect(summary).toBeTruthy()
    expect(body).toBeTruthy()
    
});

test('renders "Associated Press" when no author is given', ()=> {

    const testArticle = {}

    render(<Article article={testArticle} />)

    const ap = screen.queryByText(/associated press/i)

    expect(ap).toHaveTextContent(/associated press/i)

});

test('executes handleDelete when the delete button is pressed', ()=> {
    const fakeHandleDelete = jest.fn();

    const testArticle = {}

    render(<Article article={testArticle} handleDelete={fakeHandleDelete}/>)

    const deleteButton = screen.queryByTestId('deleteButton')

    userEvent.click(deleteButton)

    expect(fakeHandleDelete).toHaveBeenCalled()

});

//Task List:
//1. Complete all above tests. Create test article data when needed.