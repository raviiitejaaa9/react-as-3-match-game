import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {
    timer: 60,
    isTimerRunning: true,
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearTimeout(this.intervalId)
  }

  timeChange = () => {
    const {timer} = this.state
    // console.log(typeof timer)
    if (timer !== 0) {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    } else {
      clearInterval(this.intervalId)
      this.setState({isTimerRunning: false})
    }
  }

  startTimer = () => {
    this.intervalId = setInterval(this.timeChange, 1000)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  render() {
    const {timer} = this.state
    const {score, toClearInterval} = this.props

    if (toClearInterval === true) {
      this.stopTimer()
    }

    const reqTime = timer < 10 ? `0${timer}` : timer

    return (
      <div className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="timer-score-container">
          <p> score: {score} </p>
          <div className="timer-container">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
              alt="timer"
            />
            <p> {reqTime} Sec </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
