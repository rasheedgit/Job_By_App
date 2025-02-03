import {
  FaStar,
  FaSuitcase,
  FaLocationArrow,
  FaExternalLinkAlt,
} from 'react-icons/fa'

import './index.css'

const JobDetailCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    companyWebsiteUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    lifeAtCompany,
    skills,
  } = jobDetails

  return (
    <div className="job">
      <div className="job-company-info">
        <img
          className="job-company-logo"
          src={companyLogoUrl}
          alt="job details company logo"
        />
        <div>
          <h1 className="job-title">{title}</h1>
          <FaStar className="job-detail-star" color="yellow" />
          <p className="job-rating">{rating}</p>
        </div>
      </div>
      <div className="job-details-container">
        <div className="job-location-type">
          <FaLocationArrow className="job-detail-icons" color="#fff" />
          <p className="job-location">{location}</p>
          <FaSuitcase className="job-detail-icons" color="#fff" />
          <p className="job-type">{employmentType}</p>
        </div>
        <p className="job-salary">{packagePerAnnum}</p>
      </div>
      <hr className="job-divider" />
      <div className="job-descriptionTitle-companyWebsiteUrl-container">
        <h1 className="job-description-title">Description</h1>
        <a
          className="job-companyWebsiteUrl"
          href={companyWebsiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit <FaExternalLinkAlt className="job-detail-icons" />
        </a>
      </div>
      <p className="job-description">{jobDescription}</p>
      <h1 className="job-skills-title">Skills</h1>
      <ul className="job-skills-list">
        {skills.map(eachItem => (
          <li key={eachItem.name} className="job-skills-item">
            <img
              className="job-skills-image"
              src={eachItem.imageUrl}
              alt={eachItem.name}
            />
            <p className="job-skills-name">{eachItem.name}</p>
          </li>
        ))}
      </ul>
      <div className="job-life-image-container">
        <div className="job-life-container">
          <h1 className="job-life-title">Life at Company</h1>
          <p className="job-life-description">{lifeAtCompany.description}</p>
        </div>
        <img
          className="job-life-image"
          src={lifeAtCompany.imageUrl}
          alt="life at company"
        />
      </div>
    </div>
  )
}

export default JobDetailCard
