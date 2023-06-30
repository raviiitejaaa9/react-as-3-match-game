import './index.css'

const Header = props => {
  const {score, timer} = props

  const reqTime = timer < 10 ? `0${timer}` : timer

  return (
    <div className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="timer-score-container">
        <li>
          {' '}
          <p>Score: {score.toString()}</p>{' '}
        </li>
        <li className="timer-container">
          <img
            className="timer-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
          />
          <p> {reqTime} Sec </p>
        </li>
      </ul>
    </div>
  )
}

export default Header
