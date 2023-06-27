import { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

type User = {
    id: number
    name: string
    email: string
    phone: string
    website: string
}

const UsersList = (props: Props) => {
    const [users, setUsers] = useState<User[]>([])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error))
    }

    getUsers()

    return (
        <div data-testid="usersList">
            <h1>UsersList</h1>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link
                            to={`/usersUnique/${
                                user.id
                            }?name=${encodeURIComponent(
                                user.name
                            )}&phone=${encodeURIComponent(
                                user.phone
                            )}&website=${encodeURIComponent(
                                user.website
                            )}&email=${encodeURIComponent(user.email)}`}
                        >
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default UsersList

//проблема возникает из-за того, что имя пользователя (name) не передается как параметр в URL,
//поэтому оно не доступно через useParams() в компоненте UserIniquePage.
//Чтобы передать имя пользователя в URL, вы можете изменить компонент UsersList следующим образом:
