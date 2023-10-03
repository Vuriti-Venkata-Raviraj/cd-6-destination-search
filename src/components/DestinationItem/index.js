// Write your code here
import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {userDetails} = this.props
    const {imgUrl, name} = userDetails
    return (
      <li className="card-container">
        <img src={imgUrl} alt={name} className="img" />
        <p className="card-title">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
