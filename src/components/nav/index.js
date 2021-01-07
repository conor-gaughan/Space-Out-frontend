import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav className={styles.Nav}>
            <ul>
                    {
                        props.user ?
                        <>
                            <li>
                                <Link to="" onClick={props.handleLogout}>Logout</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </>
                    }
                </ul>
        
        </nav>
    )
}

export default NavBar