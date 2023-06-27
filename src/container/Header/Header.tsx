import { Link } from 'react-router-dom'

type Props = {}
const Header = (props: Props) => {
    return (
        <div className="Header">
            <Link to="/" data-testid="homeLink">
                <button>Home</button>
            </Link>

            <Link to="/test" data-testid="testLink">
                <button>TestComp</button>
            </Link>

            <Link to="/users" data-testid="usersLink">
                <button>UsersList</button>
            </Link>
        </div>
    )
}
export default Header
