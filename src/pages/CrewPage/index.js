import { Link } from 'react-router-dom'

function CrewPage(props) {
    return (
        <div>
            <h1>Crew Page</h1>
            {props.crewData.map((crew, idx) => (
                <>
                <Link to={`${crew.wikipedia}`}>
                <p>{crew.name}</p>
                <img src={`${crew.image}`} alt={`${crew.name}`} width='1000px'></img>
                </Link>
                </>
            ))}
        </div>
    )
}

export default CrewPage