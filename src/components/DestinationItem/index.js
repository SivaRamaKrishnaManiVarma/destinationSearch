// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="list">
      <img src={imgUrl} className="destination-image" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}
export default DestinationItem
