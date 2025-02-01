import {withRouter} from 'react-router-dom'
import Header from '../Header'
import {
  HomeContainer,
  HomeContent,
  HomeTitle,
  HomeDescription,
  FindJobsButton,
} from './styledComponents'

const Home = props => {
  const onFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <HomeTitle>Find The Job That Fits Your Life</HomeTitle>
        <HomeDescription>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </HomeDescription>
        <FindJobsButton onClick={onFindJobs} type="button">
          Find Jobs
        </FindJobsButton>
      </HomeContent>
    </HomeContainer>
  )
}

export default withRouter(Home)
