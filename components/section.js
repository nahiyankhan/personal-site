import styled from 'styled-components'

const StyledSection = styled.div`
  position: relative;
  ${(props) => props.fullpage ? `
    min-height: 956px;
  ` : `
    padding: 140px 0;
  `};
  ${(props) => props.centered && `
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  `};
`

export default function Section({ children, fullpage, centered, sticky }) {
  return (
    <StyledSection fullpage={fullpage} centered={centered} >
      {children}
    </StyledSection>
  )
}