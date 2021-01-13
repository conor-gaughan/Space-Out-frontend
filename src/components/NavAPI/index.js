import styles from './NavAPI.module.scss'
import { Link } from 'react-router-dom'
   
function HomePage(props) {
    return (
        <>
        <h1 className={styles.Header}>SPACEX</h1>
        <div className={styles.Main}>
            
                    <section>
                        <Link to='/rockets'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/2909/2909653.svg?token=exp=1610495972~hmac=78af6004c82792e8b9714e98323ad067' alt='rocket icon' tabIndex="1"></img>
                        <h1>Rockets</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/crew'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/2086/2086569.svg?token=exp=1610497514~hmac=6eadea5efd7f981d5196c366e953f825' alt='astronaut icon 1' tabIndex="2"></img>
                        <h1>Crews</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/launch'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/2026/2026502.svg?token=exp=1610497585~hmac=add54bc34ae48ab835ef7bd879489f79' alt='astronaut icon 2' tabIndex="3"></img>
                        <h1>Launches</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='roadster'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/683/683092.svg?token=exp=1610497612~hmac=8b6a6444defd05caf3f894f62edb0f1e' alt='sports car icon' tabIndex="4"></img>
                        <h1>Roadster</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
        </div>
        </>
    )
}

export default HomePage