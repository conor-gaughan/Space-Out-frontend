import { Link } from 'react-router-dom'
import styles from './RocketPage.module.scss'

function RocketPage(props) {
    return (
        <div className={styles.Rockets}>
            
            {props.rocketData.map((rockets, idx) => (
                <>
                <Link to={`/rockets/${idx}`}>
                
                <img src={`${rockets.flickr_images[2] || rockets.flickr_images[0]}`} alt={`${rockets.name}`}></img>
                <h1>{rockets.name}</h1>
                </Link>
            
                </>
            ))}
        </div>
    )
}

export default RocketPage