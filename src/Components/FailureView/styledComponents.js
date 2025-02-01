import styled from 'styled-components'

export const FailureContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImage = styled.img`
  width: 80%;

  @media (min-width: 768px) {
    width: 90%;
  }
`

export const FailureTitle = styled.h1`
  color: #fff;
  font-family: Roboto;
  font-size: 22px;
  margin-top: 30px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-top: 40px;
  }
`

export const FailureMessage = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 300;
  text-align: center;
  max-width: 250px;
  line-height: 1.5;

  @media (min-width: 768px) {
    max-width: 400px;
    margin-top: 0;
    margin-bottom: 40px;
  }
`

export const RetryButton = styled.button`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background-color: #6163ee;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  width: 100px;
  height: 30px;
`
