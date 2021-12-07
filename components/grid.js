import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: repeat(24, 1fr);
  margin: 0 auto;
  max-width: calc(100vw - 280px);
  position: relative;
  width: 100%;
  ${(props) => props.center && `
    align-items: center;
  `}
`

export default function Grid({ children, center }) {
  return (
    <StyledGrid center={center}>
      {children}
    </StyledGrid>
  )
}