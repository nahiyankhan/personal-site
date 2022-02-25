import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledContainer = styled(motion.div)`
  position: absolute;
  top: 140px;
`

export default function Container({ children }) {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}