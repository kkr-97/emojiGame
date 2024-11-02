import './index.css'

const NavBar = props => {
  const {score, topScore, playingStatus} = props
  const scoreVisibiltyStyle = playingStatus ? '' : 'hide'

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img-style"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className={'score-container-nav '.concat(scoreVisibiltyStyle)}>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
