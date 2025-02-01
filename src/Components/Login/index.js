import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginContent,
  LoginLogo,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', isError: false, errorMessage: ''}

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isError: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) return <Redirect to="/" />

    const {username, password, isError, errorMessage} = this.state
    return (
      <LoginContainer>
        <LoginContent>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <LoginForm onSubmit={this.handleSubmit}>
            <LoginLabel htmlFor="username">USERNAME</LoginLabel>
            <LoginInput
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
            <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
            <LoginInput
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
            />
            <LoginButton type="submit">Login</LoginButton>
            {isError && <ErrorMessage>*{errorMessage}</ErrorMessage>}
          </LoginForm>
        </LoginContent>
      </LoginContainer>
    )
  }
}

export default Login
