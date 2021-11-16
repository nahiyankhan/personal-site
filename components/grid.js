import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: repeat(24, 1fr);
  margin: 0 auto;
  max-width: calc(100vw - 280px);
  position: relative;
  width: 100%;
`

export default function Grid({ children }) {
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  )
}