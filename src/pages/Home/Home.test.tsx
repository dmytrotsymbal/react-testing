import { render, screen } from '@testing-library/react'
import Home from './Home'
import '@testing-library/jest-dom/extend-expect'

test('home snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
})

//_____________________________________________________________________________________

describe('Elements render', () => {
    test('renders UnitTest_1 title', () => {
        render(<Home />)
        const titleElement = screen.getByRole('heading')
        expect(titleElement).toBeInTheDocument()
    })

    test('renders list ul', () => {
        render(<Home />)
        const ulElement = screen.getByRole('list')
        expect(ulElement).toBeInTheDocument()
    })
})

//_____________________________________________________________________________________

describe('List contains', () => {
    test('list contains html', () => {
        render(<Home />)
        const listElement = screen.getByText(/html/i)
        expect(listElement).toBeInTheDocument()
    })
    test('list contains css', () => {
        render(<Home />)
        const listElement = screen.getByText(/css/i)
        expect(listElement).toBeInTheDocument()
        expect(listElement).toHaveStyle({
            color: 'red',
        })
    })
    test('list contains js', () => {
        render(<Home />)
        const listElement = screen.getByText(/js/i)
        expect(listElement).toBeInTheDocument()
    })
})

//_____________________________________________________________________________________
