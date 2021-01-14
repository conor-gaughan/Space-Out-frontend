

function LaunchPage(props) {
    return (
        <div>
            <h1>Launches</h1>
            {props.launchData.map((launch, idx) => (
                <>
                <h3>{launch.name}</h3>
                <p>{new Date(launch.date_local).toLocaleString()}</p>
                <p>{launch.details}</p>
                {/* new Date(flight.date_local).toLocaleString() */}
                </>
            ))}
        </div>
    )
}

export default LaunchPage