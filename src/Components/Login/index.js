import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', isError: false, errorMessage: ''}

  handleInputChange = event => {
    this.setState({[event.target.id]: event.target.value})
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
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
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
      <div className="login-container">
        <div className="login-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="login-logo"
          />
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label htmlFor="username" className="login-label">
              USERNAME
            </label>
            <input
              id="username"
              value={username}
              onChange={this.handleInputChange}
              className="login-input"
              placeholder="Username"
            />
            <label htmlFor="password" className="login-label">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
              className="login-input"
              placeholder="Password"
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {isError && <p className="login-error-message">*{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
