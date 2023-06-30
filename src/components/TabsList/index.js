import './index.css'

const TabsList = props => {
  const {tabItem, onSelectTabId, activeTabId} = props
  const {tabId, displayText} = tabItem

  const onSelect = () => {
    onSelectTabId(tabId)
  }

  const extraCss = activeTabId === tabId ? 'underline tab-btn' : 'tab-btn'

  return (
    <li className="list-item" onClick={onSelect}>
      <button type="button" className={extraCss}>
        {' '}
        {displayText}{' '}
      </button>
    </li>
  )
}

export default TabsList
