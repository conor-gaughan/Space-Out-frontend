import { Link } from 'react-router-dom'

function RocketPage(props) {
    return (
        <div>
            {props.rocketData.map((rockets, idx) => (
                <>
                <Link to={`/rockets/${idx}`}>
                <p>{rockets.name}</p>
                <img src={`${rockets.flickr_images[1]}`} alt={`${rockets.name}`}></img>
                </Link>
                </>
            ))}
        </div>
    )
}

export default RocketPage