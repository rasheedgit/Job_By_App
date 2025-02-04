import {BiSearchAlt2} from 'react-icons/bi'
import './index.css'

export const MobileSearchQuery = props => {
  const {changeQuery, value, formSubmit} = props

  return (
    <div className="mobile-search-container">
      <input
        type="search"
        placeholder="Search"
        value={value}
        onChange={changeQuery}
        className="search-input"
      />
      <button
        data-testid="searchButton"
        type="button"
        onClick={formSubmit}
        className="search-button"
      >
        <BiSearchAlt2 color="#fff" size="20" />
      </button>
    </div>
  )
}

export const DesktopSearchQuery = props => {
  const {changeQuery, value, formSubmit} = props

  return (
    <div className="desktop-search-container">
      <input
        type="search"
        placeholder="Search"
        value={value}
        onChange={changeQuery}
        className="search-input"
      />
      <button
        data-testid="searchButton"
        type="button"
        onClick={formSubmit}
        className="search-button"
      >
        <BiSearchAlt2 color="#fff" size="20" />
      </button>
    </div>
  )
}
