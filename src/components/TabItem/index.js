import './index.css'

const TabItem = props => {
  const {tabNames, updateActiveCategory, isActive} = props
  const {tabId, displayText} = tabNames

  const onSelect = () => {
    updateActiveCategory(tabId)
  }

  const activeClass = isActive ? 'active' : ''

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`button-item ${activeClass}`}
        onClick={onSelect}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
