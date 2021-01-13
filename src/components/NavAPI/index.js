import styles from './NavAPI.module.scss'
import { Link } from 'react-router-dom'
   
function HomePage(props) {
    return (
        <>
        <h1 className={styles.Header}>SPACEX</h1>
        <div className={styles.Main}>
            
                    <section className={styles.Rocket}>
                        <Link to='/rockets'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/2909/2909653.svg?token=exp=1610495972~hmac=78af6004c82792e8b9714e98323ad067' alt='rocket icon' tabIndex="1"></img>
                        <h1>Rockets</h1>
                        <p>3...2...1...</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/crew'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/2086/2086569.svg?token=exp=1610497514~hmac=6eadea5efd7f981d5196c366e953f825' alt='astronaut icon 1' tabIndex="2"></img>
                        <h1>Crews</h1>
                        <p>Astronauts!</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/launch'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/2240/2240730.svg?token=exp=1610506435~hmac=103b132c6f8c5e9beaa7ea15ca6b54ad' alt='upcoming launches icon' tabIndex="3"></img>
                        <h1>Launches</h1>
                        <p>Upcoming launches</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='roadster'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/683/683092.svg?token=exp=1610497612~hmac=8b6a6444defd05caf3f894f62edb0f1e' alt='sports car icon' tabIndex="4"></img>
                        <h1>Roadster</h1>
                        <p>Check in on Starman</p>
                        </Link>
                    </section>
                
                <img className={styles.Astronaut} src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"></img>

        </div>
        </>
    )
}

export default HomePage