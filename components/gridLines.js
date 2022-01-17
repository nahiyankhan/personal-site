import { useEffect, useState } from 'react'
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion"
import styled from 'styled-components'
import { useIsMedium, useIsLarge } from './hooks/useMediaQuery'

const GridLinesContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  pointer-events: none;
`

const line = `
  background-color: #322d38;
  position: absolute;
  z-index: 1;
`

const LineVertical = styled(motion.div)`
  ${line}
  width: 1px;
  height: 100%;
`

const LineHorizontal = styled(motion.div)`
  ${line}
  width: 100%;
  height: 1px;
`

const Corner = styled(motion.div)`
  background-color: #151216;
  position: absolute;
  height: 200%;
  width: 50%;
  transform-origin: center left;
`

const cornerVars = {
  hidden: {
    opacity: 0,
    rotate: 0,
    y: '-50%',
    x: '50vw'
  },
  start: {
    opacity: 0.5,
    rotate: 35,
    y: -140,
    x: "calc(100vw - 108px)",
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 130,
      mass: 1, 
      duration: 1.5,
      delay: 1.7,
    }
  }
}

export default function GridLines() {
  const { scrollYProgress } = useViewportScroll();
  const [introDone, setIntroDone] = useState(false);
  const isMedium = useIsMedium();
  const isLarge = useIsLarge();
  const [topLineY, setTopLineY] = useState(0);
  const [leftLineX, setLeftLineX] = useState(0);

  const moveUp = useTransform(scrollYProgress, [0.9, 1], ['100vh', '85vh'])

  const top_line_loading = useAnimation();
  const bottom_line_loading = useAnimation();
  const left_line_loading = useAnimation();
  const right_line_loading = useAnimation();

  const horizontal = {
    initial: { opacity: 0, y: "50vh", width: 0 },
    cross: { opacity: 1, width: "100%", height: 2, transition: { duration: 1.5 } },
  } 

  const vertical = {
    initial: { opacity: 0, x: "50vw", height: 0 },
    cross: { opacity: 1, height: "100%", width: 2, transition: { duration: 1.5 } },
  } 

  const spring_transition = {
    transition: { 
      type: "spring",
      damping: 50,
      stiffness: 100,
      mass: 1, 
      duration: 1.5
    }
  }

  const top_line_loading_variants = {
    ...horizontal,
    expand: { 
      y: '140px',
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
      x: "-53px",
      y: "-100px",
      rotate: 35,
      ...spring_transition
    }
  }

  const right_line_loading_variants = {
    ...vertical,
    expand: {
      x: "calc(100vw + 108px)",
      y: "100px",
      rotate: 35,
      ...spring_transition
    }
  }

  async function top_line_loading_sequence() {
    await top_line_loading.start("cross")
    await top_line_loading.start("expand")
    return setIntroDone(true)
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
  }, [])

  useEffect(() => {
    if (isLarge) {
      setTopLineY(0)
      setLeftLineX(0)
    } else if (isMedium) {
      setTopLineY(-20)
      setLeftLineX(-67)
    } else {
      setTopLineY(-40)
      setLeftLineX(-114)
    }
  }, [isMedium, isLarge])

  return (
    <>
      <GridLinesContainer>
        <LineHorizontal 
          variants={top_line_loading_variants}
          initial="initial"
          animate={top_line_loading}
          style={{
            top: introDone && topLineY 
          }}
        />
        <LineHorizontal 
          variants={bottom_line_loading_variants}
          initial="initial"
          animate={bottom_line_loading}
          style={{
            y: introDone && moveUp
          }}
        />
        <LineVertical 
          variants={left_line_loading_variants}
          initial="initial"
          animate={left_line_loading}
          style={{
            left: introDone && leftLineX
          }}
        />
        <LineVertical 
          variants={right_line_loading_variants}
          initial="initial"
          animate={right_line_loading}
        />
        <Corner 
          variants={cornerVars}
          initial="hidden"
          animate="start"
        />
      </GridLinesContainer>
    </>
  )
}