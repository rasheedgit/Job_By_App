import {
  FilterTitle,
  FilterList,
  FilterListItem,
  FilterLabel,
  FilterLine,
} from './styledComponents'

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
      <FilterLine />
      <FilterTitle>Type of Employment</FilterTitle>
      <FilterList>
        {employmentTypesList.map(({employmentTypeId, label}) => (
          <FilterListItem key={employmentTypeId}>
            <input
              onChange={() => changeJobType(employmentTypeId)}
              checked={jobTypeList.includes(employmentTypeId)}
              id={employmentTypeId}
              type="checkbox"
            />
            <FilterLabel htmlFor={employmentTypeId}>{label}</FilterLabel>
          </FilterListItem>
        ))}
      </FilterList>
      <FilterLine />
      <FilterTitle>Salary Range</FilterTitle>
      <FilterList>
        {salaryRangesList.map(({salaryRangeId, label}) => (
          <FilterListItem key={salaryRangeId}>
            <input
              id={salaryRangeId}
              checked={activePackage === salaryRangeId}
              onChange={() => setPackage(salaryRangeId)}
              type="radio"
              name="salary"
            />
            <FilterLabel htmlFor={salaryRangeId}>{label}</FilterLabel>
          </FilterListItem>
        ))}
      </FilterList>
    </>
  )
}

export default Filter
