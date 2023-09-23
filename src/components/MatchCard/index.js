import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    competingTeamLogo,
    result,
    matchStatus,
    competingTeam,
  } = recentMatchesDetails

  const matchStatusColor = matchStatus === 'Won' ? 'status-green' : 'status-red'
  return (
    <li className="team-card-list-item-container">
      <img
        className="card-image-ele"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-para">{competingTeam}</p>
      <p className="result-para">{result}</p>
      <p className={matchStatusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
