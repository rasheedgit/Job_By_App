import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px auto;
`

export const LoginContent = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: #272727;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`

export const LoginLogo = styled.img`
  width: 110px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 150px;
  }
`

export const LoginForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const LoginLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-family: Roboto;
  margin-bottom: 10px;
`

export const LoginInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #475568;
  border-radius: 4px;
  background: transparent;
  color: #fff;
  font-size: 12px;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #6163ee;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  margin-top: 4px;
`
