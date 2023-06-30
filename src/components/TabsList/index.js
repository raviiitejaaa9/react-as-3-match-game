import './index.css'

const TabsList = props => {
  const {tabItem, onSelectTabId} = props
  const {tabId, displayText} = tabItem

  const onSelect = () => {
    onSelectTabId(tabId)
  }

  return (
    <li className="list-item" onClick={onSelect}>
      {displayText}
    </li>
  )
}

export default TabsList
