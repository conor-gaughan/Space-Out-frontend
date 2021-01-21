import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.Footer}>
            <Link to='https://www.linkedin.com/in/conorgaughan/'>
                <p styles={{margin: '10px'}}><FaGithubSquare size={60} /></p>
            </Link>
            <Link to='https://github.com/conor-gaughan'>
                <FaLinkedin size={60} />
            </Link>
        {/* <p> {new Date().getFullYear()} </p> */}
        {/* <img style={{backgroundColor: 'red'}}src={github}></img> */}

        </div>
    )
}

export default Footer