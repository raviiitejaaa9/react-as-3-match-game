import './index.css'

const Thumbnail = props => {
  const {imageItem, onSelectThumbnail} = props
  const {id, thumbnailUrl} = imageItem

  const onClickThumbnail = () => {
    onSelectThumbnail(id)
  }
  return (
    <img
      className="thumbnail-img"
      src={thumbnailUrl}
      alt="thumbnail"
      onClick={onClickThumbnail}
    />
  )
}

export default Thumbnail
