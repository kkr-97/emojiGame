import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojiItem} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => onClickEmojiItem(id)

  return (
    <li onClick={onClickEmoji}>
      <button className="emoji-btn" type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
