import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  return jwtToken ? <Route {...props} /> : <Redirect to="/login" />
}

export default ProtectedRoute
