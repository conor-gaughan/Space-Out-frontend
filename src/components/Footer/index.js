import styles from './Footer.module.css'
import github from '../../Images/011-github-sign.svg'


function Footer() {
    return (
        <div className={styles.Footer}>
        <p>Footer {new Date().getFullYear()}</p>
        {/* <img style={{backgroundColor: 'red'}}src={github}></img> */}
        </div>
    )
}

export default Footer