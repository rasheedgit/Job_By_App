import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {FaBusinessTime} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="header-navbar-container">
      <nav className="header-navbar">
        <Link to="/" className="navbar-link">
          <img
            className="header-website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>

        <ul className="header-mobile-navbar-list">
          <li className="header-mobile-navbar-item">
            <Link to="/" className="navbar-link">
              <AiFillHome className="header-mobile-icon" />
            </Link>
          </li>
          <li className="header-mobile-navbar-item">
            <Link to="/jobs" className="navbar-link">
              <FaBusinessTime className="header-mobile-icon" />
            </Link>
          </li>
          <li className="header-mobile-navbar-item">
            <button
              className="header-mobile-logout-button"
              onClick={onLogout}
              type="button"
              data-testid="logout-button"
            >
              <FiLogOut className="header-mobile-icon" />
            </button>
          </li>
        </ul>

        <ul className="header-desktop-navbar-list">
          <li>
            <Link to="/" className="navbar-link">
              <p className="header-desktop-navbar-item">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="navbar-link">
              <p className="header-desktop-navbar-item">Jobs</p>
            </Link>
          </li>
        </ul>

        <button
          className="header-desktop-logout-button"
          onClick={onLogout}
          type="button"
        >
          Logout
        </button>
      </nav>
    </div>
  )
}

export default withRouter(Header)
