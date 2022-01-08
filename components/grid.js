import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: repeat(24, 1fr);
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  width: 100%;

  ${(props) => props.center && `
    align-items: center;
  `}

  ${({ theme }) => theme.medium`
    padding: 0 80px;
  `};

  ${({ theme }) => theme.large`
    padding: 0 140px;
  `};
`

export default function Grid({ children, center }) {
  return (
    <StyledGrid center={center}>
      {children}
    </StyledGrid>
  )
}