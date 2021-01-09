import { Link } from 'react-router-dom'

function RocketPage(props) {
    return (
        <div>
            {props.rocketData.map((rockets, idx) => (
                <>
                <Link to={`/rockets/${idx}`}>
                <p>{rockets.name}</p>
                </Link>
                </>
            ))}
        </div>
    )
}

export default RocketPage