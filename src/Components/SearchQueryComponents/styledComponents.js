import styled from 'styled-components'

export const MobileSearchContainer = styled.form`
  width: 100%;
  background-color: #000;
  border: solid 1px #272727;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  margin-top: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopSearchContainer = styled.form`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    max-width: 400px;
    background-color: #000;
    border: solid 1px #272727;
    height: 40px;
    align-items: center;
    border-radius: 2px;
    margin-top: 20px;
    margin-bottom: 5px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #000;
  padding-left: 15px;
  font-family: Roboto;
  color: #fff;
  cursor: pointer;
`

export const SearchButton = styled.button`
  background-color: #272727;
  width: 60px;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`
