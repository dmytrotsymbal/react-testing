import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import TestComp from './TestComp'

test('component contains elements', () => {
    render(<TestComp />)
    const titleElement = screen.getByText(/TestComp/i)
    expect(titleElement).toBeInTheDocument()

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('btn')

    const inputElement = screen.getByPlaceholderText(/Type here/i)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toMatchSnapshot()
})

test('randomText render', async () => {
    render(<TestComp />)
    const randomTextElement = await screen.findByText(/randomText/i)
    expect(randomTextElement).toBeInTheDocument()
    expect(randomTextElement).toHaveStyle({
        color: 'red',
    })
})

test('CLICK EVENT', async () => {
    render(<TestComp />)
    const toggleButton = screen.getByTestId('toggleBtn')
    expect(toggleButton).toBeInTheDocument()

    //-----------------------------------------------------------------------
    //OnClick event
    expect(screen.queryByTestId('toggleElement')).toBeNull()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('toggleElement')).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.queryByTestId('toggleElement')).toBeNull()
})

test('INPUT EVENT', async () => {
    render(<TestComp />)
    const inputElement = screen.getByPlaceholderText(/Type here/i)
    expect(inputElement).toBeInTheDocument()

    //-----------------------------------------------------------------------
    //INPUT event
    expect(screen.getByTestId('valueH3Element')).toContainHTML('')

    // fireEvent.input(inputElement, { target: { value: 'test123' } })
    userEvent.type(inputElement, 'test123')
    expect(screen.getByTestId('valueH3Element')).toContainHTML('test123')
})

test('component snapshot', () => {
    const { asFragment } = render(<TestComp />)
    expect(asFragment()).toMatchSnapshot()
})
