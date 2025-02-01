import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
  }
`

export const HomeContent = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    padding-top: 50px;
  }
`

export const HomeTitle = styled.h1`
  font-size: 34px;
  max-width: 500px;
  font-family: Roboto;
  font-weight: 900;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 60px;
    margin-bottom: 30px;
  }
`

export const HomeDescription = styled.p`
  font-size: 16px;
  max-width: 500px;
  font-family: Roboto;
  font-weight: 300;
  color: #fff;
  line-height: 1.6;
  letter-spacing: 1px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const FindJobsButton = styled.button`
  display: block;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: #6163ee;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 90px;
  height: 35px;

  @media (min-width: 768px) {
    width: 110px;
    border-radius: 4px;
    font-size: 14px;
    height: 40px;
  }
`
