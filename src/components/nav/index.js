import styles from './Nav.module.css'

function NavBar() {
    return (
        <nav className={styles.Nav}>


        <ul>
            <li>Home</li>
            <li>Rockets</li>
            <li>Roadster</li>
            <li>Favorites</li>
        </ul>
        
        </nav>
    )
}

export default NavBar