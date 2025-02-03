import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import {ApiFailureView} from '../FailureView'
import JobDetailCard from '../JobDetailCard'
import SimilarJob from '../SimilarJob'

import './index.css'

const apiStatusConstant = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
}

class JobDetail extends Component {
  state = {
    apiStatus: apiStatusConstant.INITIAL,
    jobDetails: {},
    similarJobs: [],
  }

  componentDidMount() {
    this.getJobDetails()
  }

  formatJobDetails = jobDetails => {
    const data = {
      companyLogoUrl: jobDetails.company_logo_url,
      companyWebsiteUrl: jobDetails.company_website_url,
      employmentType: jobDetails.employment_type,
      id: jobDetails.id,
      jobDescription: jobDetails.job_description,
      location: jobDetails.location,
      packagePerAnnum: jobDetails.package_per_annum,
      rating: jobDetails.rating,
      title: jobDetails.title,
      lifeAtCompany: {
        description: jobDetails.life_at_company.description,
        imageUrl: jobDetails.life_at_company.image_url,
      },
      skills: jobDetails.skills.map(eachItem => ({
        imageUrl: eachItem.image_url,
        name: eachItem.name,
      })),
    }

    return data
  }

  formatSimilarJob = jobDetails => {
    const data = {
      companyLogoUrl: jobDetails.company_logo_url,
      employmentType: jobDetails.employment_type,
      id: jobDetails.id,
      jobDescription: jobDetails.job_description,
      rating: jobDetails.rating,
      title: jobDetails.title,
      location: jobDetails.location,
    }

    return data
  }

  getJobDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.LOADING})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, option)
      const data = await response.json()
      if (response.ok === true) {
        const jobDetails = this.formatJobDetails(data.job_details)
        const similarJobs = data.similar_jobs.map(eachItem =>
          this.formatSimilarJob(eachItem),
        )
        this.setState({
          apiStatus: apiStatusConstant.SUCCESS,
          jobDetails,
          similarJobs,
        })
      } else {
        this.setState({apiStatus: apiStatusConstant.FAILURE})
        console.log(data)
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstant.FAILURE})
      console.log(error)
    }
  }

  renderLoadingView = () => (
    <div className="jobs-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <ApiFailureView retry={this.getJobDetails} />

  renderSuccessView = () => {
    const {jobDetails, similarJobs} = this.state
    return (
      <>
        <JobDetailCard jobDetails={jobDetails} />
        <h1 className="similar-jobs-title">Similar Jobs</h1>
        <ul className="similar-jobs-list">
          {similarJobs.map(eachItem => (
            <SimilarJob key={eachItem.id} jobDetails={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.LOADING:
        return this.renderLoadingView()
      case apiStatusConstant.FAILURE:
        return this.renderFailureView()
      case apiStatusConstant.SUCCESS:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="job-detail-contaienr">
        <Header />
        {this.renderContent()}
      </div>
    )
  }
}

export default JobDetail
