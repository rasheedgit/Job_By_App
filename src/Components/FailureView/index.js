import './index.css'

export const ApiFailureView = props => {
  const {retry} = props

  return (
    <div className="api-failure-container">
      <img
        className="api-failure-image"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1 className="api-failure-title">Oops! Something Went Wrong</h1>
      <p className="api-failure-message">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="api-retry-button" onClick={retry} type="button">
        Retry
      </button>
    </div>
  )
}

export const NoJobsFound = () => (
  <div className="api-failure-container">
    <img
      className="api-failure-image"
      src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
      alt="no jobs"
    />
    <h1 className="api-failure-title">No Jobs Found</h1>
    <p className="api-failure-message">
      We could not find any jobs. Try other filters.
    </p>
  </div>
)
