import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272727;
`

export const Navbar = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  width: 100px;
`

export const MobileNavbarList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`

export const NavbarLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const MobileNavbarItem = styled.li`
  font-size: 26px;
  color: #f9fafc;
  margin: 0;
`

export const MobileLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 26px;
`

export const DesktopNavbarList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    list-style: none;
    padding-left: 0;
    align-items: center;
    justify-content: space-between;
    width: 100px;
  }
`

export const DesktopNavbarItem = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: #f9fafc;
`

export const DesktopLogoutButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    background-color: #6163ee;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100px;
    height: 30px;
  }
`
