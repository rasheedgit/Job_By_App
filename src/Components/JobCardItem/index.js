import {Link} from 'react-router-dom'
import {FaStar, FaSuitcase, FaLocationArrow} from 'react-icons/fa'
import './index.css'

const JobCardItem = props => {
  const {jobDetails} = props
  const {
    title,
    rating,
    packagePerAnnum,
    location,
    jobDescription,
    id,
    employmentType,
    companyLogoUrl,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="navbar-link">
      <li className="job-card">
        <div className="job-card-company-info">
          <img
            className="job-card-company-logo"
            src={companyLogoUrl}
            alt="company logo"
          />
          <div>
            <h1 className="job-card-title">{title}</h1>
            <FaStar color="yellow" />
            <p className="job-card-rating">{rating}</p>
          </div>
        </div>
        <div className="job-card-details-container">
          <div className="job-card-location-type">
            <FaLocationArrow color="#fff" size="12" />
            <p className="job-card-location">{location}</p>
            <FaSuitcase color="#fff" size="12" />
            <p className="job-card-type">{employmentType}</p>
          </div>
          <p className="job-card-salary">{packagePerAnnum}</p>
        </div>
        <hr className="job-card-divider" />
        <h1 className="job-card-description-title">Description</h1>
        <p className="job-card-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCardItem
