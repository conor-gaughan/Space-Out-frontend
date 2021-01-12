import styles from './NavAPI.module.scss'
import { Link } from 'react-router-dom'
   
function HomePage(props) {
    return (
        <div className={styles.Main}>
                    <section>
                        <Link to='/rockets'>
                        <h1>Rocket 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/crew'>
                        <h1>Crew 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/launch'>
                        <h1>Launches 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='roadster'>
                        <h1>Roadster 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
        </div>
    )
}

export default HomePage