import styles from "./UpcomingLaunches.module.scss"

function LaunchPage(props) {
    return (
        <div styles={styles.Upcoming}>
            <h1>Upcoming Launches</h1>
            {props.launchData.map((launch, idx) => (
                <>
                <h2>{launch.name}</h2>
                <h2>{new Date(launch.date_local).toLocaleString()}</h2>
                <p>{launch.details}</p>
                </>
            ))}
        </div>
    )
}

export default LaunchPage