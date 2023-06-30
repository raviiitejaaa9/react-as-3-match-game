import './index.css'

const Thumbnail = props => {
  const {imageItem, onSelectThumbnail} = props
  const {id, thumbnailUrl} = imageItem

  const onClickThumbnail = () => {
    onSelectThumbnail(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnail-btn"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default Thumbnail
