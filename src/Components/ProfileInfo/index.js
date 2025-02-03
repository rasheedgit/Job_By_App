import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
}

class ProfileInfo extends Component {
  state = {
    apiStatus: apiStatusConstants.FAILURE,
    profileDetails: {},
  }

  componentDidMount() {
    this.getProfileInfo()
  }

  getProfileInfo = async () => {
    this.setState({apiStatus: apiStatusConstants.LOADING})

    try {
      const apiUrl = 'https://apis.ccbp.in/profile'
      const jwtToken = Cookies.get('jwt_token')
      const option = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(apiUrl, option)
      const data = await response.json()

      if (response.ok === true) {
        const formattedProfileDetails = {
          name: data.profile_details.name,
          profileImageUrl: data.profile_details.profile_image_url,
          shortBio: data.profile_details.short_bio,
        }

        this.setState({
          apiStatus: apiStatusConstants.SUCCESS,
          profileDetails: formattedProfileDetails,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.FAILURE})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.FAILURE})
    }
  }

  renderLoadingView = () => (
    <div className="profile-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="30" width="30" />
    </div>
  )

  renderFailureView = () => (
    <div className="profile-failure-container">
      <button
        className="profile-retry-button"
        onClick={this.getProfileInfo}
        type="button"
      >
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails

    return (
      <div className="profile-container">
        <img className="profile-image" src={profileImageUrl} alt="avatar" />
        <h1 className="profile-username">{name}</h1>
        <p className="profile-short-bio">{shortBio}</p>
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.FAILURE:
        return this.renderFailureView()
      case apiStatusConstants.SUCCESS:
        return this.renderSuccessView()
      case apiStatusConstants.LOADING:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default ProfileInfo
