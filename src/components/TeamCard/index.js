// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {dashBoardDetails} = props
  const {id, name, teamImageUrl} = dashBoardDetails

  return (
    <Link to={`/team-matches/${id}`} className="match-card-link">
      <li className="match-card-container">
        <img className="team-image" src={teamImageUrl} alt={name} />
        <p className="home-para">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
