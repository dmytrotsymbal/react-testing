import axios from 'axios'

const getUsers = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )

    const usersArr = response.data
    console.log(usersArr)
}

export default getUsers
