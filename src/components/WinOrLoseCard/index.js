import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, onPlayAgain} = props

  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgain = () => onPlayAgain()

  return (
    <div className="win-lose-card">
      <div className="score-container">
        <h1 className="win-lose-heading">
          {score === 12 ? 'You Won' : 'You Lose'}
        </h1>
        <p className="score-desc">
          {score === 12 || score > topScore ? 'Best Score' : 'Score'}
        </p>
        <p className="score">{score}/12</p>
        <button
          className="win-lose-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="win-lose-img" alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
