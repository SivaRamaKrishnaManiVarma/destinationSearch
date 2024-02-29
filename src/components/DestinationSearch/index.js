// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(destination => 
      destination.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading">Destination Search</h1>
          <div>
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeSearchValue}
            className="search-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search-icon"
            className="search-icon"
          />
        </div>
        <ul className="destination-list">
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
      </div>
    )
  }
}

export default DestinationSearch
