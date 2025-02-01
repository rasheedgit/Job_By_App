import {Link} from 'react-router-dom'
import {FaStar, FaSuitcase, FaLocationArrow} from 'react-icons/fa'
import {
  JobCard,
  CompanyInfo,
  CompanyLogo,
  JobTitle,
  Rating,
  JobDetailsContainer,
  LocationTypeContainer,
  Location,
  JobType,
  Salary,
  DescriptionTitle,
  Description,
  StyledHr,
} from './styledComponents'

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
    <Link to={`jobs/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
      <JobCard>
        <CompanyInfo>
          <CompanyLogo src={companyLogoUrl} alt={title} />
          <div>
            <JobTitle>{title}</JobTitle>
            <FaStar color="yellow" /> <Rating>{rating}</Rating>
          </div>
        </CompanyInfo>
        <JobDetailsContainer>
          <LocationTypeContainer>
            <FaLocationArrow color="#fff" size="12" />
            <Location>{location}</Location>
            <FaSuitcase color="#fff" size="12" />
            <JobType>{employmentType}</JobType>
          </LocationTypeContainer>
          <Salary>{packagePerAnnum}</Salary>
        </JobDetailsContainer>
        <StyledHr />
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>{jobDescription}</Description>
      </JobCard>
    </Link>
  )
}

export default JobCardItem
