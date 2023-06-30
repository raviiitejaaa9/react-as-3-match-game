import {Component} from 'react'
import TabsList from '../TabsList'
import Header from '../Header'
import './index.css'
import Thumbnail from '../Thumbnail'

class Home extends Component {
  state = {
    timer: 60,
    isTimerRunning: true,
    activeTabId: 'FRUIT',
    randomImgNo: 0,
    score: 0,
    toClearInterval: false,
    toResetTimer: false,
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

  onClickPlayAgain = () => {
    this.setState({
      toClearInterval: false,
      timer: 60,
    })
    this.componentDidMount()
  }

  onSelectThumbnail = id => {
    const {randomImgNo} = this.state
    const {imagesList} = this.props
    const currentImgId = imagesList[randomImgNo].id
    console.log(id)
    console.log(currentImgId)

    if (id === currentImgId) {
      const randomNum = this.getRandomImage()
      this.setState({
        randomImgNo: randomNum,
      })
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        toClearInterval: true,
      })
      this.stopTimer()
    }
  }

  getRandomImage = () => {
    const {imagesList} = this.props
    const imgListLength = imagesList.length
    // console.log(imgListLength)
    const randomNum = Math.floor(Math.random(0, imgListLength) * imgListLength)
    // console.log(randomNum)
    return randomNum
  }

  onSelectTabId = id => {
    console.log(id)
    this.setState({
      activeTabId: id,
    })
  }

  getFilteredList = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state
    const modifiedList = imagesList.filter(
      eachItem => eachItem.category === activeTabId,
    )
    return modifiedList
  }

  gameOverCard = () => {
    const {score} = this.state
    return (
      <div className="game-over-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p className="text-format"> Your Score </p>
        <p className="text-format"> {score} </p>
        <button
          type="button"
          className="play-again-btn"
          onClick={this.onClickPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-img"
          />
          <p className="play-again"> Play Again </p>
        </button>
      </div>
    )
  }

  getImageGame = () => {
    const thumbnailList = this.getFilteredList()
    const {randomImgNo} = this.state

    const {tabsList, imagesList} = this.props

    const randomImg = imagesList[randomImgNo].imageUrl
    console.log(randomImg)

    return (
      <>
        <img className="main-img" src={randomImg} alt="match" />
        <ul className="tabs-list">
          {tabsList.map(eachItem => (
            <TabsList
              tabItem={eachItem}
              key={eachItem.tabId}
              onSelectTabId={this.onSelectTabId}
            />
          ))}
        </ul>
        <div className="thumbnail-container">
          {thumbnailList.map(eachItem => (
            <Thumbnail
              imageItem={eachItem}
              key={eachItem.id}
              onSelectThumbnail={this.onSelectThumbnail}
            />
          ))}
        </div>
      </>
    )
  }

  render() {
    const {score, toClearInterval, timer} = this.state

    const reqContainer = toClearInterval
      ? this.gameOverCard()
      : this.getImageGame()

    return (
      <div className="app-container">
        <Header score={score} toClearInterval={toClearInterval} timer={timer} />
        {reqContainer}
      </div>
    )
  }
}

export default Home
