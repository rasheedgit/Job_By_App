import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
  background-size: cover;
  padding: 20px 10px;
  margin: 20px 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (min-width: 768px) {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`

export const ProfileImage = styled.img`
  width: 40px;

  @media (min-width: 768px) {
    width: 50px;
  }
`

export const UserName = styled.p`
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
  color: #6163ee;
  margin-top: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`

export const ShortBio = styled.p`
  font-size: 14px;
  font-family: Roboto;
  color: #272727;
  margin-top: 5px;
  margin-bottom: 10px;
  line-height: 1.6;
`

export const FailureContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RetryButton = styled.button`
  display: block;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: #6163ee;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  width: 90px;
  height: 35px;
`

export const LoaderContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
