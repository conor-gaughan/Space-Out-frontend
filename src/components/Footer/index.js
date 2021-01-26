import styles from './Footer.module.scss'

import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.Footer}>
                <a target="_blank" href="https://github.com/conor-gaughan">
                        <FaGithubSquare size={60} />
                </a>
            <a target="_blank" href="https://www.linkedin.com/in/conorgaughan/">
                <FaLinkedin size={60} />
                    </a>
        
        </div>
    )
}



export default Footer