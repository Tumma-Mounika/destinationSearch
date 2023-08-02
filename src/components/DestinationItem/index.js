// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsListItem} = props
  const {name, imgUrl} = destinationsListItem

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="image-card" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
