import {withRouter, Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-content">
      <h1 className="home-title">Find The Job That Fits Your Life</h1>
      <p className="home-description">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs" className="link">
        <button type="button" className="home-find-jobs-button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default withRouter(Home)
