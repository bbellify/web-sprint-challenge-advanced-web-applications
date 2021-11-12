import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';



import articleService from '../services/articleServices'
jest.mock('../services/articleServices')


test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce([])

    render(<View />)

    await waitFor(()=> expect(articleService).toHaveBeenCalled())

});

test("renders three articles without errors", async ()=> {

    articleService.mockResolvedValueOnce([
            {
                headline: 'article 1'
            },
            {
                headline: 'article 2'
            },
            {
                headline: 'article 3'
            }
        ]
    )

    render(<View />)

    const articles = await screen.findAllByTestId('headline');

    await waitFor(()=> expect(articleService).toHaveBeenCalled())
    await waitFor(()=> expect(articles).toHaveLength(3))



});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.