import { useParams } from 'react-router-dom'

type Props = {}

const UserIniquePage = (props: Props) => {
    const { id } = useParams()
    const searchParams = new URLSearchParams(window.location.search)
    const name = searchParams.get('name')
    const phone = searchParams.get('phone')
    const website = searchParams.get('website')
    const email = searchParams.get('email')

    return (
        <div>
            <h1>UserIniquePage</h1>

            <p>User ID: {id}</p>

            <p>user name : {name}</p>

            <p>user phone : {phone}</p>

            <p>user website : {website}</p>

            <p>user email : {email}</p>
        </div>
    )
}
export default UserIniquePage

//Затем, в компоненте UserIniquePage,
//вы можете получить имя пользователя из параметров URL с помощью useParams() и
//извлечь его из строки запроса с помощью URLSearchParams:
