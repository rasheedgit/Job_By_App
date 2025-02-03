import {Link} from 'react-router-dom'
import {FaStar, FaSuitcase, FaLocationArrow} from 'react-icons/fa'

import './index.css'

const SimilarJob = ({jobDetails}) => {
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    rating,
    title,
    location,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="navbar-link">
      <li className="job-card similar-job-container">
        <div className="job-card-company-info">
          <img
            className="job-card-company-logo"
            src={companyLogoUrl}
            alt="similar job company logo"
          />
          <div>
            <h1 className="job-card-title">{title}</h1>
            <FaStar color="yellow" />
            <p className="job-card-rating">{rating}</p>
          </div>
        </div>
        <h1 className="job-card-description-title">Description</h1>
        <p className="job-card-description similar-job-description">
          {jobDescription}
        </p>
        <div className="job-card-details-container">
          <div className="job-card-location-type">
            <FaLocationArrow color="#fff" size="12" />
            <p className="job-card-location">{location}</p>
            <FaSuitcase color="#fff" size="12" />
            <p className="job-card-type">{employmentType}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default SimilarJob
