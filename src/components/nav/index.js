import styles from './Nav.module.css'

function NavBar() {
    return (
        <header>


        <ul className={styles.navBar}>
            <li className={styles.navItems}>Home</li>
            <li className={styles.navItems}>Rockets</li>
            <li className={styles.navItems}>Roadster</li>
            <li className={styles.navItems}>Favorites</li>
        </ul>
        
        </header>
    )
}

export default NavBar