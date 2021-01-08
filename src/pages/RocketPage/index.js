

function RocketPage(props) {
    return (
        <div>
            {props.rocketData.map((rocket, idx) => (
                <>
                <p>{rocket.name}</p>
                <p>{rocket.country}</p>
                </>
            ))}
        </div>
    )
}

export default RocketPage