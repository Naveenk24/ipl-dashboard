import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {dashBoard: [], isLoading: true}

  componentDidMount() {
    this.getIplDashBoardList()
  }

  getIplDashBoardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedDetails = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({dashBoard: updatedDetails, isLoading: false})
  }

  renderTheDashBoard = () => {
    const {dashBoard} = this.state

    return (
      <ul className="match-card-list">
        {dashBoard.map(eachItem => (
          <TeamCard key={eachItem.id} dashBoardDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1>IPL Dashboard</h1>
        </div>

        <div>
          {isLoading ? (
            <div data-testid="loader" className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          ) : (
            this.renderTheDashBoard()
          )}
        </div>
      </div>
    )
  }
}

export default Home
