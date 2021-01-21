import styles from './Roadster.module.scss'

function RoadsterPage(props) {
    return (
        <div className={styles.Roadster}>
            <h1>Roadster Page</h1>
            <p>{props.roadsterData.details}</p>
            <p>Current Speed: {props.roadsterData.speed_mph.toFixed(2)} mph</p>
            <p>Distance from Earth: {props.roadsterData.earth_distance_mi.toFixed(2)} miles</p>
        </div>
    )
}

export default RoadsterPage