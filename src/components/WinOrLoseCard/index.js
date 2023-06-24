const WinOrLoseCard = props => {
  const {won, score, playAgain} = props

  const againButton = () => {
    playAgain()
  }

  if (won) {
    return (
      <div className="card">
        <div className="cardBox">
          <h1>You Won</h1>
          <h2>Best Score</h2>
          <h1 className="score">12/12</h1>
          <button type="button" className="againButton" onClick={againButton}>
            Play Again
          </button>
        </div>
        <div>
          <img
            className="card_img"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="card">
      <div className="cardBox">
        <h1 className="card-heading">You Lose</h1>
        <h2>Score</h2>
        <h1 className="score">{score}/12</h1>
        <button type="button" className="againButton" onClick={againButton}>
          Play Again
        </button>
      </div>
      <div>
        <img
          className="card_img"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
