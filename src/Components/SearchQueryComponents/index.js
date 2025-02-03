import {BiSearchAlt2} from 'react-icons/bi'
import './index.css'

export const MobileSearchQuery = props => {
  const {changeQuery, value, formSubmit} = props

  return (
    <form className="mobile-search-container" onSubmit={formSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={value}
        onChange={changeQuery}
        className="search-input"
      />
      <button
        data-testid="searchButton"
        type="submit"
        className="search-button"
      >
        <BiSearchAlt2 color="#fff" size="20" />
      </button>
    </form>
  )
}

export const DesktopSearchQuery = props => {
  const {changeQuery, value, formSubmit} = props

  return (
    <form className="desktop-search-container" onSubmit={formSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={value}
        onChange={changeQuery}
        className="search-input"
      />
      <button
        data-testid="searchButton"
        type="submit"
        className="search-button"
      >
        <BiSearchAlt2 color="#fff" size="20" />
      </button>
    </form>
  )
}
