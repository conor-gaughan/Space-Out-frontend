

function LaunchPage(props) {
    return (
        <div>
            <h1>Launches</h1>
            {props.launchData.map((launch, idx) => (
                // <video width="320" height="240">
                //     <source src={`${launch.webcast}`}></source>
                // </video>
                // <img src={`${launch.flickr.original[0]}`} alt="Girl in a jacket" width="500" height="600"> </img>
                <p>{launch.flight_number}</p>
                
            ))}
        </div>
    )
}

export default LaunchPage