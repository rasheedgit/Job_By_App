import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const Filter = props => {
  const {setPackage, activePackage, changeJobType, jobTypeList} = props

  return (
    <>
      <hr className="filter-line" />
      <p className="filter-title">Type of Employment</p>
      <ul className="filter-list">
        {employmentTypesList.map(({employmentTypeId, label}) => (
          <li className="filter-list-item" key={label}>
            <input
              onChange={() => changeJobType(employmentTypeId)}
              checked={jobTypeList.includes(employmentTypeId)}
              id={employmentTypeId}
              type="checkbox"
            />
            <label className="filter-label" htmlFor={employmentTypeId}>
              {label}
            </label>
          </li>
        ))}
      </ul>
      <hr className="filter-line" />
      <p className="filter-title">Salary Range</p>
      <ul className="filter-list">
        {salaryRangesList.map(({salaryRangeId, label}) => (
          <li className="filter-list-item" key={label}>
            <input
              id={salaryRangeId}
              checked={activePackage === salaryRangeId}
              onChange={() => setPackage(salaryRangeId)}
              type="radio"
              name="salary"
            />
            <label className="filter-label" htmlFor={salaryRangeId}>
              {label}
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Filter
