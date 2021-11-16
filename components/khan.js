import { motion } from 'framer-motion'
import styled from 'styled-components'

const Khantainer = styled(motion.div)`
  display: flex;
  height: ${(props) => props.small ? '40px' : '220px'};
  ${(props) => props.small && 'margin-top: 0.5rem'};
  position: relative;
`

const WordMotion = {
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 2,
      ease: [.25,.8,.25,1]
    },
  },
}

const FirstHalfMotion = {
  hidden: {
    opacity: 0,
    x: -40
  },
  show: {
    opacity: 0.9,
    x: 0,
    transition: {
      duration: 2,
      ease: [.25,.8,.25,1]
    }
  }
}

const SecondHalfMotion = {
  hidden: {
    opacity: 0,
    x: -40
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: [.25,.8,.25,1]
    }
  }
}

export default function Khan({small}) {
  return (
    <>
      {small ? (
        <Khantainer small={small}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.38 56.73">
            <g id="kh" fill="#FFF">
              <path id="h" d="M96.86 38H78.22v18.6H59.9V.06h18.32v20h18.64v-20h18.32v26.13L96.86 51.43Z"/>
              <path id="k" d="M0 .06h18.29v20.5l8.9-12.46 5.73-8H55.1L35.74 27l20.43 29.73H35.26L24.7 42.41 14.44 56.73H0Z"/>
            </g>
            <g id="an" fill="#FFF">
              <path id="n" d="M197.35 29.36 197 .06 215.38 0v56.66h-22.85l-12.45-18.72h-3.47l-.19 18.75h-18.2V0h11.93c6.73 0 10.23 5.62 10.23 5.62Z"/>
              <path id="a" d="M121.1 56.73H96.65l36.6-51s3.5-5.67 10.23-5.67h11.92v56.67h-18.2L137 38h-3.47Z"/>
            </g>
          </svg>
        </Khantainer>
       ) : (
        <Khantainer
          variants={WordMotion}
          initial="hidden"
          animate="show"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.38 56.73">
            <motion.g id="kh" fill="#FFF" variants={FirstHalfMotion}>
              <path id="h" d="M96.86 38H78.22v18.6H59.9V.06h18.32v20h18.64v-20h18.32v26.13L96.86 51.43Z"/>
              <path id="k" d="M0 .06h18.29v20.5l8.9-12.46 5.73-8H55.1L35.74 27l20.43 29.73H35.26L24.7 42.41 14.44 56.73H0Z"/>
            </motion.g>
            <motion.g id="an" fill="#FFF" variants={SecondHalfMotion}>
              <path id="n" d="M197.35 29.36 197 .06 215.38 0v56.66h-22.85l-12.45-18.72h-3.47l-.19 18.75h-18.2V0h11.93c6.73 0 10.23 5.62 10.23 5.62Z"/>
              <path id="a" d="M121.1 56.73H96.65l36.6-51s3.5-5.67 10.23-5.67h11.92v56.67h-18.2L137 38h-3.47Z"/>
            </motion.g>
          </svg>
        </Khantainer>
       )}
    </>
  )
}