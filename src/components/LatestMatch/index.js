import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div>
        <p className="head">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="latest-match-topic-ans">{venue}</p>
        <p className="latest-match-topic-ans">{result}</p>
      </div>
      <img
        className="team-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div>
        <p className="latest-match-topic">First Innings</p>
        <p className="latest-match-topic-ans">{firstInnings}</p>
        <p className="latest-match-topic">Second Innings</p>
        <p className="latest-match-topic-ans">{secondInnings}</p>
        <p className="latest-match-topic">Man Of The Match</p>
        <p className="latest-match-topic-ans">{manOfTheMatch}</p>
        <p className="latest-match-topic">Umpires</p>
        <p className="latest-match-topic-ans">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
