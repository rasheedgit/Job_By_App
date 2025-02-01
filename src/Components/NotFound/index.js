import styled from 'styled-components'

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NotFound = () => (
  <NotFoundContainer>
    <h1>Not Found</h1>
  </NotFoundContainer>
)

export default NotFound
