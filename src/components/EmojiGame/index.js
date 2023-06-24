/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    pending: true,
    won: false,
  }

  playAgain = () => {
    this.setState({
      clickedEmojis: [],
      score: 0,
      pending: true,
      won: false,
    })
  }

  changeState = id => {
    const {clickedEmojis, score, topScore} = this.state

    if (!clickedEmojis.includes(id)) {
      if (score < topScore) {
        this.setState(prevState => ({
          clickedEmojis: [...prevState.clickedEmojis, id],
          score: prevState.score + 1,
        }))
        if (score === 11) {
          this.setState({
            pending: false,
            won: true,
          })
        }
      } else {
        this.setState(prevState => ({
          clickedEmojis: [...prevState.clickedEmojis, id],
          score: prevState.score + 1,
          topScore: prevState.score + 1,
        }))
        if (score === 11) {
          this.setState({
            pending: false,
            won: true,
          })
        }
      }
    } else {
      this.setState({
        pending: false,
      })
    }
  }

  render() {
    const {score, pending, won, topScore} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    console.log(score, pending)

    return (
      <div className="bg">
        <div className="NavBarContainer">
          <NavBar score={score} topScore={topScore} />
        </div>
        <div className="section2">
          {pending ? (
            <div className="EmojisContainer">
              <ul>
                {shuffledEmojisList().map(eachItem => (
                  <EmojiCard
                    eachItem={eachItem}
                    key={eachItem.id}
                    changeState={this.changeState}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="cardContainer">
              <WinOrLoseCard
                won={won}
                score={score}
                playAgain={this.playAgain}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
