/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    playingStatus: true,
    clickedIdList: [],
  }

  onClickEmojiItem = id => {
    const {clickedIdList, score} = this.state
    if (clickedIdList.includes(id)) {
      this.setState({playingStatus: false})
    } else {
      if (score === 11) {
        this.setState({score: 12, playingStatus: false})
      }
      this.setState({
        score: score + 1,
        clickedIdList: [...clickedIdList, id],
      })
    }
  }

  onPlayAgain = () => {
    this.setState(prevState => ({
      score: 0,
      topScore:
        prevState.score > prevState.topScore
          ? prevState.score
          : prevState.topScore,
      playingStatus: true,
      clickedIdList: [],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const shuffledEmojiList = () => emojisList.sort(() => Math.random() - 0.5)
    return shuffledEmojiList
  }

  containsDuplicates = clickedIdList => {
    for (let index = 0; index < clickedIdList.length; index += 1) {
      if (
        clickedIdList.indexOf(clickedIdList[index]) !==
        clickedIdList.lastIndexOf(clickedIdList[index])
      ) {
        return false
      }
    }
    return true
  }

  gamePanel = emojisList => {
    const {score, topScore, playingStatus} = this.state

    if (playingStatus === false || score === 12) {
      return (
        <WinOrLoseCard
          onPlayAgain={this.onPlayAgain}
          topScore={topScore}
          score={score}
        />
      )
    }
    return (
      <ul className="emoji-list-container">
        {emojisList.map(eachItem => (
          <EmojiCard
            onClickEmojiItem={this.onClickEmojiItem}
            emojiDetails={eachItem}
            key={eachItem.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, playingStatus} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojisList = shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar
          playingStatus={playingStatus}
          score={score}
          topScore={topScore}
        />
        <div className="game-container">{this.gamePanel(emojisList)}</div>
      </div>
    )
  }
}
export default EmojiGame
