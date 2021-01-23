import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav className={styles.Nav}>
            <ul>
                <li>Test</li>
                    {
                        props.user ?
                        <>
                            <li>
                                <Link to="" onClick={props.handleLogout}>Logout</Link>
                            </li>
                            <li>
                                <Link to="/">Misson Control</Link>
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