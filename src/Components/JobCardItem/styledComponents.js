import styled from 'styled-components'

export const JobCard = styled.div`
  width: 100%;
  background-color: #272727;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 20px;
`

export const CompanyInfo = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
`

export const CompanyLogo = styled.img`
  width: 50px;
  margin-right: 15px;
  align-self: flex-start;
`

export const JobTitle = styled.h1`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  margin: 0px 0px 10px 0px;
  width: 100%;
`

export const Rating = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  margin: 0px;
  display: inline;
  position: relative;
  bottom: 1px;
`

export const JobDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const LocationTypeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Location = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: Roboto;
  margin: 0px 15px 0px 8px;
`

export const JobType = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: Roboto;
  margin: 0px 15px 0px 8px;
`

export const Salary = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin: 0px;
`

export const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: #fff;
  margin: 10px 0;
`

export const DescriptionTitle = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin: 14px 0px 12px 0px;
`

export const Description = styled.p`
  color: #fff;
  font-size: 13px;
  font-family: Roboto;
  word-spacing: 2px;
  line-height: 1.5;
  margin: 0px 0px 10px 0px;
`
