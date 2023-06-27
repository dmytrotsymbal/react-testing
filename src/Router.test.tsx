import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import App from './container/App/App'
import { MemoryRouter } from 'react-router-dom'

describe('Router links testing', () => {
    test('testing UsersLink', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const usersLink = screen.getByTestId('usersLink')
        userEvent.click(usersLink)
        const titleElementInUsersComp = screen.getByText(/UsersList/i)
        expect(titleElementInUsersComp).toBeInTheDocument()
    })

    test('testing testLink', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const testLink = screen.getByTestId('testLink')
        userEvent.click(testLink)
        const titleElementInTestComp = screen.getByText(/TestComp/i)
        expect(titleElementInTestComp).toBeInTheDocument()
    })

    test('testing home link', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const homeLink = screen.getByTestId('homeLink')
        userEvent.click(homeLink)
        expect(screen.getByTestId('homePage')).toBeInTheDocument()
    })

    test('error url', () => {
        render(
            <MemoryRouter initialEntries={['/sdkfnskjlndfkjsndfjk']}>
                <App />
            </MemoryRouter>
        )
        const errorPage = screen.getByTestId('errorPage')
        expect(errorPage).toBeInTheDocument()
    })
})
