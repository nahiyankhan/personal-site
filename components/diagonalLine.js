import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import useScrollInView from './hooks/useScrollInView'
import Grid from './grid'

const LinesContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  ${(props) => !props.reverse && 'margin-top: -140px'};
  ${(props) => props.reverse && 'transform: rotate(180deg)' };
`

const line = `
  background-color: #322d38;
  position: absolute;
`

const LineDiagonal = styled(motion.div)`
  ${line}
  width: 2px;
  right: 0;
  transform: rotate(35deg);
  transform-origin: 0 0;
`

export default function DiagonalLine({ reverse }) {
  const { scrollYProgress } = useViewportScroll();
  const {
    ref: lineRef,
    start: scrollStart,
    end: scrollEnd
  } = useScrollInView();
  const range = [0, 3400];
  const height = useTransform(scrollYProgress, [scrollStart, scrollEnd], range);

  return (
    <LinesContainer
      ref={lineRef}
      reverse={reverse}
    >
      <LineDiagonal 
        style={{
          height: height
        }}
      />
    </LinesContainer>
  )
}