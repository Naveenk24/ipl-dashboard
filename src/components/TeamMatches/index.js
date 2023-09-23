import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: {}, isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  updateLatestMatches = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
    matchStatus: data.match_status,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedDetails = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.updateLatestMatches(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachItem =>
        this.updateLatestMatches(eachItem),
      ),
    }
    this.setState({teamMatchesList: updatedDetails, isLoading: false})
  }

  getBackgroundClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    return id.toLowerCase()
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderMatchCardDetails = () => {
    const {teamMatchesList} = this.state
    const {recentMatches} = teamMatchesList
    console.log(recentMatches)
    return (
      <ul className="team-card-list-container">
        {recentMatches.map(eachItem => (
          <MatchCard key={eachItem.id} recentMatchesDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesList} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesList

    return (
      <div className="banner-container">
        <img className="banner-image" src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderMatchCardDetails()}
      </div>
    )
  }

  render() {
    const backgroundClassName = `background-team-color-${this.getBackgroundClassName()}`
    const {isLoading} = this.state

    return (
      <div className={`"bg-container" ${backgroundClassName}`}>
        {isLoading ? this.renderLoading() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
