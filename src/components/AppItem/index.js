import './index.css'

const AppItem = props => {
  const {appItems} = props
  const {appName, imageUrl} = appItems
  return (
    // <li className="app-list-item">
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="app" />
      <p className="app-name">{appName}</p>
    </li>
    // </li>
  )
}

export default AppItem
