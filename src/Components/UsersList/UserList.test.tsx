import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UsersList from './UsersList'

test('component contains elements', () => {
    render(<UsersList />)
    const userList_Component = screen.getByTestId('usersList')
    expect(userList_Component).toBeInTheDocument()
})
