import './index.css'

const TabItem = props => {
  const {eachTab, onclickSelectApps, isActive} = props
  const {tabId, displayText} = eachTab
  const onClickApps = () => {
    onclickSelectApps(tabId)
  }
  const buttonActive = isActive === tabId ? 'active-button' : ''
  return (
    <li>
      <button
        type="button"
        className={`${buttonActive} button`}
        onClick={onClickApps}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
