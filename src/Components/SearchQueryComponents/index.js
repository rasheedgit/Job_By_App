import {BiSearchAlt2} from 'react-icons/bi'
import {
  MobileSearchContainer,
  DesktopSearchContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

export const MobileSearchQuery = props => {
  const {changeQuery, value, formSubmit} = props

  return (
    <MobileSearchContainer onSubmit={formSubmit}>
      <SearchInput
        type="search"
        placeholder="Search"
        value={value}
        onChange={changeQuery}
      />
      <SearchButton type="submit">
        <BiSearchAlt2 color="#fff" size="20" />
      </SearchButton>
    </MobileSearchContainer>
  )
}

export const DesktopSearchQuery = props => {
  const {changeQuery, value, formSubmit} = props

  return (
    <DesktopSearchContainer onSubmit={formSubmit}>
      <SearchInput
        type="search"
        placeholder="Search"
        value={value}
        onChange={changeQuery}
      />
      <SearchButton type="submit">
        <BiSearchAlt2 color="#fff" size="20" />
      </SearchButton>
    </DesktopSearchContainer>
  )
}
