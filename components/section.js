import styled from 'styled-components'

const StyledSection = styled.div`
  ${(props) => props.fullpage ? `
    min-height: calc(100vh - 140px);
  ` : `
    margin: 140px 0;
  `};
  ${(props) => props.centered && `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `};
`

export default function Section({ children, fullpage, centered, sticky }) {
  return (
    <StyledSection fullpage={fullpage} centered={centered} >
      {children}
    </StyledSection>
  )
}