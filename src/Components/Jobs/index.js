import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import JobCardItem from '../JobCardItem'
import ProfileInfo from '../ProfileInfo'
import {ApiFailureView, NoJobsFound} from '../FailureView'
import {MobileSearchQuery, DesktopSearchQuery} from '../SearchQueryComponents'
import Filter from '../Filter'

import {
  JobsContainer,
  LoaderContainer,
  SuccessViewJobsList,
  FiltersJobsContainer,
  ProfileFiltersContainer,
  SearchJobsContainer,
} from './styledComponents'

const jobApiStatusConstant = {
  LOADING: 'LOADING',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
}

class Jobs extends Component {
  state = {
    jobApiStatus: jobApiStatusConstant.FAILURE,
    jobsList: [],
    searchQuery: '',
    minimumPackage: '',
    employmentTypeList: [],
  }

  componentDidMount() {
    this.getJobsList()
  }

  getJobsList = async () => {
    this.setState({jobApiStatus: jobApiStatusConstant.LOADING})
    const {searchQuery, minimumPackage, employmentTypeList} = this.state
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentTypeList.join()}&minimum_package=${minimumPackage}&search=${searchQuery}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const formattedJobsList = data.jobs.map(eachItem => ({
          companyLogoUrl: eachItem.company_logo_url,
          employmentType: eachItem.employment_type,
          id: eachItem.id,
          jobDescription: eachItem.job_description,
          location: eachItem.location,
          packagePerAnnum: eachItem.package_per_annum,
          rating: eachItem.rating,
          title: eachItem.title,
        }))
        this.setState({
          jobApiStatus: jobApiStatusConstant.SUCCESS,
          jobsList: formattedJobsList,
        })
      } else {
        this.setState({jobApiStatus: jobApiStatusConstant.FAILURE})
      }
    } catch (error) {
      this.setState({jobApiStatus: jobApiStatusConstant.FAILURE})
      console.error(error)
    }
  }

  onChangeSearchQuery = event => {
    this.setState({searchQuery: event.target.value})
  }

  onSearchQueryFormSubmit = event => {
    event.preventDefault()
    this.getJobsList()
  }

  onChangeMinimumPackage = id => {
    this.setState({minimumPackage: id}, this.getJobsList)
  }

  onChangeEmploymentTypeList = id => {
    this.setState(prevState => {
      const list = new Set(prevState.employmentTypeList)
      if (list.has(id)) {
        list.delete(id)
      } else {
        list.add(id)
      }
      return {employmentTypeList: [...list]}
    }, this.getJobsList)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <ApiFailureView getJobsList={this.getJobsList} />

  renderSuccessView = () => {
    const {jobsList} = this.state
    if (jobsList.length === 0) {
      return <NoJobsFound />
    }

    return (
      <SuccessViewJobsList>
        {jobsList.map(eachItem => (
          <JobCardItem key={eachItem.id} jobDetails={eachItem} />
        ))}
      </SuccessViewJobsList>
    )
  }

  renderJobs = () => {
    const {jobApiStatus} = this.state

    switch (jobApiStatus) {
      case jobApiStatusConstant.LOADING:
        return this.renderLoadingView()
      case jobApiStatusConstant.FAILURE:
        return this.renderFailureView()
      case jobApiStatusConstant.SUCCESS:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    const {searchQuery, minimumPackage, employmentTypeList} = this.state

    return (
      <JobsContainer>
        <Header />
        <FiltersJobsContainer>
          <ProfileFiltersContainer>
            <MobileSearchQuery
              changeQuery={this.onChangeSearchQuery}
              value={searchQuery}
              formSubmit={this.onSearchQueryFormSubmit}
            />
            <ProfileInfo />
            <Filter
              setPackage={this.onChangeMinimumPackage}
              activePackage={minimumPackage}
              changeJobType={this.onChangeEmploymentTypeList}
              jobTypeList={employmentTypeList}
            />
          </ProfileFiltersContainer>
          <SearchJobsContainer>
            <DesktopSearchQuery
              changeQuery={this.onChangeSearchQuery}
              value={searchQuery}
              formSubmit={this.onSearchQueryFormSubmit}
            />
            {this.renderJobs()}
          </SearchJobsContainer>
        </FiltersJobsContainer>
      </JobsContainer>
    )
  }
}

export default Jobs
