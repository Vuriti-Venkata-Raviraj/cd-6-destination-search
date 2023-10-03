// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      usersDetailsList: props.destinationsList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="title">Destination Search</h1>
        <div className="search-container">
          <input
            className="input"
            type="search"
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItem userDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
