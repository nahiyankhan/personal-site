import styled from 'styled-components'

const StyledSection = styled.div`
  position: relative;
  padding: 80px 0;

  ${({ theme }) => theme.medium`
    padding: 140px 0;
  `};

  ${(props) => props.fullpage ? `
    min-height: calc(100vh - 140px);
  ` : `
    min-height: 400px;
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