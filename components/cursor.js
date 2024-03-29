import { motion } from "framer-motion"
import useMousePosition from './hooks/useMousePosition'
import styled from 'styled-components';

const StyledCursorContainer = styled.div`
  position: fixed;
  z-index: 9999;
`

const StyledCursor = styled(motion.div)`
  position: absolute;
  will-change: transform;
  width: 40px;
  height: 40px;
  border: 1px solid #C3CFD7;
  border-radius: 100%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
`

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <StyledCursorContainer>
      <StyledCursor
        initial={{
          x: '50%',
          y: '50%'
        }}
        animate={{
          x: x-16,
          y: y-16
        }}
        transition={{ type: "spring", mass: 0.5 }}
      ></StyledCursor>
    </StyledCursorContainer>
  )
}