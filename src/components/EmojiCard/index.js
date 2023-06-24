const EmojiCard = props => {
  const {eachItem, changeState} = props
  const {id} = eachItem
  const emojiClicked = () => {
    changeState(id)
  }

  return (
    <li>
      <button className="EmojiButton" type="button" onClick={emojiClicked}>
        <img
          className="Emoji_Image"
          src={eachItem.emojiUrl}
          alt={eachItem.emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiCard
