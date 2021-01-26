import { Link } from 'react-router-dom'
import styles from './CrewPage.module.scss'

function CrewPage(props) {
    return (
        <div className={styles.Crew}>
            {props.crewData.map((crew, idx) => (
                <>
                <a target="_blank" href={`${crew.wikipedia}`}>
                {/* <Link target="_blank" to={`${crew.wikipedia}`}> */}
                <img src={`${crew.image}`} alt={`${crew.name}`}></img>
                <h2>{crew.name}</h2>
                <p>{crew.agency}</p>
                </a>
                {/* </Link> */}
                </>
            ))}
        </div>
    )
}

export default CrewPage