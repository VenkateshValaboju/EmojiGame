const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="NavBox">
      <div className="NavBarBox1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="GameName">Emoji Game</h1>
      </div>
      <div className="NavBarBox2">
        <p className="score_view">Score: {score}</p>
        <p className="score_view">Top Score: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
