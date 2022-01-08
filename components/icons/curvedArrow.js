import styled from 'styled-components'
import { motion } from "framer-motion";

const IconContainer = styled(motion.div)`
  width: 180px;
  height: 180px;

  margin-left: 40px;
  top: 56px;
  position: relative;
`

export default function CurvedArrow() {
  const arrowTailVars = {
    hidden: { 
      opacity: 0,
      pathLength: 0 
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 0,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const arrowHeadVars = {
    hidden: { 
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 1.5,
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <IconContainer>
      <motion.svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <motion.path 
          variants={arrowTailVars}
          d="M2 8H47C52 8 62 10.6667 62 21.3333C62 32 52 34.6667 47 34.6667H26.1785C20.9351 34.6667 16.0244 37.2358 13.0346 41.5433L3 56" 
          stroke="#FF52BF" 
          strokeWidth="4" 
          strokeLinecap="round" />

        <motion.path 
          variants={arrowHeadVars}
          d="M2.00006 57.2651L2.00006 34.6453" 
          stroke="#FF52BF" 
          strokeWidth="4" 
          strokeLinecap="round"/>
        <motion.path 
          variants={arrowHeadVars}
          d="M2 57.2651L23.6198 57.2651" 
          stroke="#FF52BF" 
          strokeWidth="4" 
          strokeLinecap="round"/>
      </motion.svg>
    </IconContainer>
  )
}