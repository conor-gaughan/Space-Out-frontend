import styles from './Footer.module.css'

function Footer() {
    return (
        <>
        <p className={styles.Footer}>Footer {new Date().getFullYear()}</p>
        </>
    )
}

export default Footer