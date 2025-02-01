import styled from 'styled-components'

export const JobsContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SuccessViewJobsList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
`

export const FiltersJobsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`

export const ProfileFiltersContainer = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: 260px;
    margin-right: 24px;
  }
`

export const SearchJobsContainer = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`
