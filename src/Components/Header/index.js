import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {FaBusinessTime} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {
  NavbarContainer,
  Navbar,
  WebsiteLogo,
  MobileNavbarList,
  NavbarLink,
  MobileNavbarItem,
  MobileLogoutButton,
  DesktopNavbarList,
  DesktopNavbarItem,
  DesktopLogoutButton,
} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NavbarContainer>
      <Navbar>
        <NavbarLink to="/">
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </NavbarLink>

        <MobileNavbarList>
          <MobileNavbarItem>
            <NavbarLink to="/">
              <AiFillHome className="mobile-navbar-item" />
            </NavbarLink>
          </MobileNavbarItem>
          <MobileNavbarItem>
            <NavbarLink to="/jobs">
              <FaBusinessTime className="mobile-navbar-item" />
            </NavbarLink>
          </MobileNavbarItem>
          <MobileNavbarItem>
            <MobileLogoutButton onClick={onLogout} data-testid="logout-button">
              <FiLogOut className="mobile-navbar-item" />
            </MobileLogoutButton>
          </MobileNavbarItem>
        </MobileNavbarList>

        <DesktopNavbarList>
          <li>
            <NavbarLink to="/">
              <DesktopNavbarItem>Home</DesktopNavbarItem>
            </NavbarLink>
          </li>
          <li>
            <NavbarLink to="/jobs">
              <DesktopNavbarItem>Jobs</DesktopNavbarItem>
            </NavbarLink>
          </li>
        </DesktopNavbarList>

        <DesktopLogoutButton onClick={onLogout}>Logout</DesktopLogoutButton>
      </Navbar>
    </NavbarContainer>
  )
}

export default withRouter(Header)
