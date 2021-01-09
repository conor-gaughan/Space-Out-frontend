

function RoadsterPage(props) {
    return (
        <div>
            <h1>Roadster Page</h1>
            <p>{props.roadsterData.details}</p>
            <p>Current Speed: {props.roadsterData.speed_mph.toFixed(2)} mph</p>
            <p>Distance from Earth: {props.roadsterData.earth_distance_mi.toFixed(2)} mph</p>
            {/* {props.roadsterData.map((car, idx) => (
                <p>{car.details}</p>
            ))} */}
        </div>
    )
}

export default RoadsterPage