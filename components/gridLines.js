import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import styled from 'styled-components'

const GridLinesContainer = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`

const line = `
  background-color: #322d38;
  position: absolute;
`

const LineVertical = styled(motion.div)`
  ${line}
  width: 1px;
  height: 100vh;
`

const LineHorizontal = styled(motion.div)`
  ${line}
  width: 100vw;
  height: 1px;
`

export default function GridLines() {

  const top_line_loading = useAnimation();
  const bottom_line_loading = useAnimation();
  const left_line_loading = useAnimation();
  const right_line_loading = useAnimation();

  const horizontal = {
    initial: { opacity: 0, y: "50vh", width: 0 },
    cross: { opacity: 1, width: "100vw", height: 2, transition: { duration: 1.5 } },
  } 

  const vertical = {
    initial: { opacity: 0, x: "50vw", height: 0 },
    cross: { opacity: 1, height: "100vh", width: 2, transition: { duration: 1.5 } },
  } 

  const spring_transition = {
    transition: { type: "spring",
      damping: 50,
      stiffness: 100,
      mass: 1, 
      duration: 1.5
    }
  }

  const top_line_loading_variants = {
    ...horizontal,
    expand: { 
      y: "140px", 
      ...spring_transition
    }
  }

  const bottom_line_loading_variants = {
    ...horizontal,
    expand: { 
      y: "100vh", 
      ...spring_transition
    }
  }

  const left_line_loading_variants = {
    ...vertical,
    expand: {
      x: "140px",
      ...spring_transition
    }
  }

  const right_line_loading_variants = {
    ...vertical,
    expand: {
      x: "calc(100vw - 140px)",
      ...spring_transition
    }
  }

  async function top_line_loading_sequence() {
    await top_line_loading.start("cross")
    return top_line_loading.start("expand")
  }

  async function bottom_line_loading_sequence() {
    await bottom_line_loading.start("cross")
    return bottom_line_loading.start("expand")
  }

  async function left_line_loading_sequence() {
    await left_line_loading.start("cross")
    return left_line_loading.start("expand")
  }

  async function right_line_loading_sequence() {
    await right_line_loading.start("cross")
    return right_line_loading.start("expand")
  }

  useEffect(() => {
    top_line_loading_sequence()
    bottom_line_loading_sequence()
    left_line_loading_sequence()
    right_line_loading_sequence()
  }, [top_line_loading, bottom_line_loading, left_line_loading, right_line_loading])

  return (
    <>
      <GridLinesContainer>
        <LineHorizontal 
          variants={top_line_loading_variants}
          initial="initial"
          animate={top_line_loading}
        />
        <LineHorizontal 
          variants={bottom_line_loading_variants}
          initial="initial"
          animate={bottom_line_loading}
        />
        <LineVertical 
          variants={left_line_loading_variants}
          initial="initial"
          animate={left_line_loading}
        />
        <LineVertical 
          variants={right_line_loading_variants}
          initial="initial"
          animate={right_line_loading}
        />
      </GridLinesContainer>
    </>
  )
}