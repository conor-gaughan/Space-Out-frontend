import styles from './RocketDetailPage.module.scss'

function RocketDetailPage(props) {
    
    return (
        <div className={styles.RocketDetails}>
        <h1>{props.rocket.name} Detail Page</h1>
        <p>Description: {props.rocket.description}</p>
        <p>Engine: {props.rocket.engines.type}</p>
        <p>Height: {props.rocket.height.feet} feet</p>
        <p>Weight: {props.rocket.mass.lb} lbs</p>
        <p>Cost per launch: ${props.rocket.cost_per_launch.toLocaleString()} USD</p>
        <p>First flight: {props.rocket.first_flight}</p>
        </div>
    )
}

export default RocketDetailPage