import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledMarkup = styled(motion.div)`
  font-size: 0.8rem;
  font-weight: 500;
  color: #858690;
  position: absolute;
  width: 40px;
  height: 100%;
  left: -39px;
  border: 2px solid #322d38;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`

const markupMotion = {
  rest: { 
    opacity: 0, 
    // x: 16,
    duration: 0.2,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
}

export default function Markup({ tag }) {
  return (
    <StyledMarkup variants={markupMotion}>
      {tag}
    </StyledMarkup>
  )
}