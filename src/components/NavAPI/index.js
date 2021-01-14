import styles from './NavAPI.module.scss'
import { Link } from 'react-router-dom'
import rocketImg from '../../Images/002-launch.svg'
import crewImg from '../../Images/005-astronaut-1.svg'
import planetImg from '../../Images/007-planet.svg'
import roadsterImg from '../../Images/003-car.svg'
   
function HomePage(props) {
    return (
        <>
        <h1 className={styles.Header}>SPACEX</h1>
        <div className={styles.Main}>
            
                    <section className={styles.Rocket}>
                        <Link to='/rockets'>
                        <img src={rocketImg} alt='rocket icon' tabIndex="1"></img>
                        <h1>Rockets</h1>
                        <p>3...2...1...</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/crew'>
                        <img src={crewImg} alt='astronaut icon 1' tabIndex="2"></img>
                        <h1>Crews</h1>
                        <p>Astronauts!</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='/launch'>
                        <img src={planetImg} alt='upcoming launches icon' tabIndex="3"></img>
                        <h1>Launches</h1>
                        <p>Upcoming launches</p>
                        </Link>
                    </section>
                    <section>
                        <Link to='roadster'>
                        <img src={roadsterImg} alt='sports car icon' tabIndex="4"></img>
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