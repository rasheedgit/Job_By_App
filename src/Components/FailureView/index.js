import {
  FailureContainer,
  FailureImage,
  FailureTitle,
  FailureMessage,
  RetryButton,
} from './styledComponents'

export const ApiFailureView = props => {
  const {getJobsList} = props

  return (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <FailureTitle>Oops! Something Went Wrong</FailureTitle>
      <FailureMessage>
        We cannot seem to find the page you are looking for.
      </FailureMessage>
      <RetryButton onClick={getJobsList} type="button">
        Retry
      </RetryButton>
    </FailureContainer>
  )
}

export const NoJobsFound = () => (
  <FailureContainer>
    <FailureImage
      src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
      alt="no jobs"
    />
    <FailureTitle>No Jobs Found</FailureTitle>
    <FailureMessage>
      We could not find any jobs. Try other filters.
    </FailureMessage>
  </FailureContainer>
)
