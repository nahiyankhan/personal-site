import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
// import Markup from './markup'

const WordMotion = {
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0,
      ease: [.25,.8,.25,1]
    },
  },
}

const FirstHalfMotion = {
  rest: {
    opacity: 0,
    x: -40
  },
  show: {
    opacity: 0.8,
    x: 0,
    transition: {
      duration: 2,
      ease: [.25,.8,.25,1]
    }
  }
}

const SecondHalfMotion = {
  rest: {
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

const getTitle = title => {
  switch(title) {
    case 'about':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.08 56.66">
          <motion.g id="abo" fill="#FFF" variants={FirstHalfMotion}>
            <path d="M60 .9h33.28c11.34 0 16.26 7.56 16.26 14 0 6.82-4 11.42-9.36 12.57 5.91.9 10.43 6.32 10.43 13.38 0 7.64-5.17 14.87-16.18 14.87H60Zm29.42 20.37a3.46 3.46 0 0 0 3.29-3.53 3.37 3.37 0 0 0-3.29-3.37H76.61v6.9Zm.5 20.94a3.62 3.62 0 0 0 3.86-3.7 3.73 3.73 0 0 0-3.86-3.77H76.61v7.47ZM142 0c16.92 0 30 11.5 30 28.33s-13.05 28.33-30 28.33-30-11.5-30-28.33S125 0 142 0Zm0 17c-6.56 0-10.82 5-10.82 11.3s4.26 11.3 10.82 11.3 10.82-5 10.82-11.3S148.52 17 142 17Z"/>
            <path id="a" d="M23.63 55.68H0L35.38 6.33S38.76.9 45.26.9h11.53v54.78H39.2L39 37.55h-3.34Z"/>
          </motion.g>
          <motion.g id="ut" fill="#FFF" variants={SecondHalfMotion}>
            <path d="M175.48.9h16.84v31.7c0 5.26 2.71 9.44 9.52 9.44s9.45-4.18 9.45-9.44V.9h16.83v32.19c0 13.64-7.8 23.57-26.28 23.57s-26.36-9.93-26.36-23.48Z"/>
            <path d="M233.82 15.4h-14.7V.94h57l-10.3 14.46h-15.41v21.5l-13.49 18.82h-3.1Z"/>
          </motion.g>
        </svg>
      )
    case 'contact':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373.73 56.57">
          <motion.g id="con" fill="#FFF" variants={FirstHalfMotion}>
            <path d="M86.32 0c16.89 0 29.92 11.48 29.92 28.28s-13 28.28-29.92 28.28S56.4 45.13 56.4 28.32 69.43 0 86.32 0Zm0 14.59c-7.95 0-13.12 6.07-13.12 13.69S78.37 42 86.32 42s13.12-6 13.12-13.68-5.17-13.69-13.12-13.69Z" transform="translate(0 -.04)"/>
            <path id="n" d="m157.73 29.24-.3-28.3 17.72-.06v54.73h-22.08l-12-18.11h-3.36l-.18 18.11h-17.6V.91h11.52c6.5 0 9.88 5.42 9.88 5.42Z" transform="translate(0 -.04)"/>
            <path d="M0 28.32C0 11.44 13 0 29.68 0c14.75 0 22 8.36 25.24 15.9L39 23.34a10.32 10.32 0 0 0-9.81-6.29c-5.71 0-10.8 4.33-10.8 11.27 0 6.29 4.37 11.23 11.44 11.26A10.41 10.41 0 0 0 39 33.31l15.94 7.31c-3.19 7.3-10.49 16-25.24 16C13 56.61 0 45.13 0 28.32ZM193.52 15.46h-14.67V1h56.86l-10.24 14.46h-15.39v21.47l-13.47 18.78h-3.09Z" transform="translate(0 -.04)"/>
          </motion.g>
          <motion.g id="tact" fill="#FFF" variants={SecondHalfMotion}>
            <path id="a" d="M223.24 55.67h-23.59L235 6.41S238.34 1 244.83 1h11.51v54.67h-17.56l-.18-18.1h-3.35Z" transform="translate(0 -.04)"/>
            <path d="M331.54 15.46h-14.67V1h56.86l-10.24 14.46H348.1v21.47l-13.47 18.78h-3.09ZM259.94 28.33c0-16.89 12.95-28.28 29.68-28.28 14.75 0 22 8.36 25.25 15.9l-15.94 7.4a10.33 10.33 0 0 0-9.81-6.3c-5.71 0-10.8 4.34-10.8 11.28 0 6.28 4.37 11.22 11.44 11.26a10.45 10.45 0 0 0 9.17-6.27l15.94 7.31c-3.2 7.29-10.5 16-25.25 16-16.73-.02-29.68-11.49-29.68-28.3Z" transform="translate(0 -.04)"/>
          </motion.g>
        </svg>
      )
    case 'projects':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.2 56.99">
          <motion.g id="proj" fill="#FFF" variants={FirstHalfMotion}>
            <path d="M0 1h29.15C41.93 1 48.8 9.52 48.8 19.75S41.93 38.1 29.15 38.1H16.54v17.52H0Zm27 13.76H16.54v9.58H27a4.79 4.79 0 1 0 0-9.58ZM74.33 38.1h-6v17.52H51.81V1H81c12.78 0 19.65 8.52 19.65 18.75 0 9.42-5.48 14.41-9.82 16.54l13.84 19.33H85.8Zm4.09-23.34H68.35v9.58h10.07c2.79 0 5.41-1.8 5.41-4.83s-2.62-4.75-5.41-4.75ZM166.2 39.57a12.74 12.74 0 0 0 7.05 2.43c3.6 0 6.05-2.3 6.05-6.15V1h16.55v35.13c0 14-8.44 20.47-21.13 20.47-5.32 0-11-1.14-15.23-4.42ZM133.66.06c16.86 0 29.88 11.46 29.88 28.25s-13 28.25-29.88 28.25-29.89-11.46-29.89-28.25S116.79.06 133.66.06Zm0 17c-6.55 0-10.8 5-10.8 11.26s4.25 11.26 10.8 11.26 10.79-5 10.79-11.26S140.2 17 133.66 17Z" transform="translate(0 -.06)"/>
          </motion.g>
          <motion.g id="ects" fill="#FFF" variants={SecondHalfMotion}>
            <path d="M200.2 1.45h41.44v13.76h-24.89v6.38h24.32v13.76h-24.32v7h24.89v13.72H200.2ZM244.67 28.8c0-16.87 12.94-28.25 29.65-28.25 14.74 0 21.94 8.35 25.22 15.89l-15.92 7.38a10.31 10.31 0 0 0-9.8-6.28c-5.71 0-10.79 4.33-10.79 11.26 0 6.28 4.37 11.21 11.43 11.25a10.46 10.46 0 0 0 9.16-6.26l15.92 7.29c-3.2 7.29-10.48 16-25.22 16-16.71-.03-29.65-11.49-29.65-28.28ZM343.21 35.7a24.59 24.59 0 0 0 17 6.8c3 0 5.85-1 5.85-3.09s-2.21-3.08-7.43-4c-8.7-1.58-22-3.64-22-16.85 0-8.93 7.44-17.08 21.91-17.08 8.62 0 16.37 2.45 22.38 7.36l-8.54 11.31a26.27 26.27 0 0 0-14.71-5.22c-3.95 0-4.82 1.42-4.82 2.77 0 2 2.13 2.76 7.75 3.71 8.7 1.5 21.59 4 21.59 16.21 0 11.63-8.62 18.35-22.78 18.35-11.23 0-18.9-3.32-24.52-8.38Z" transform="translate(0 -.06)"/>
            <path d="M316.4 15.86h-14.65V1.45h56.8l-10.23 14.41H333v21.45l-13.51 18.76h-3.09Z" transform="translate(0 -.06)"/>
          </motion.g>
        </svg>
      )
    default:
      return ''
  }
}

const Container = styled(motion.div)`
  display: flex;
  height: 220px;
  position: relative;
`

export default function Title({ title }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
    if (!inView) {
      controls.start("rest");
    }
  }, [controls, inView]);

  return (
    <Container
      variants={WordMotion}
      initial="rest"
      animate={controls}
      ref={ref}
      whileHover="hover"
    >
      {/* <Markup tag="h2" /> */}
      {getTitle(title)}
    </Container>
  )
}