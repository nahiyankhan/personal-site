import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

import Heading from './heading'
import Title from './title'
import Section from "./section"
import Grid from "./grid"
import useAnimateIn from './hooks/useAnimateIn'
import DiagonalLine from './diagonalLine';

const HelloContainer = styled(motion.div)`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 12;
  margin-top: 140px;
  margin-bottom: 140px;
`

export default function Contact() {
  const { scrollYProgress } = useViewportScroll();

  const {
    ref: helloRef,
    ctrls: helloCtrls,
    vars: helloVars,
  } = useAnimateIn({
    threshold: 0.75,
    distance: '-5rem'
  });

  return (
    <Section fullpage>
      <DiagonalLine reverse={true} />
      
      <Section>
        <Grid>
          <Title title={'contact'} />
        </Grid>
      </Section>

      <Grid>
        <HelloContainer
          ref={helloRef}
          animate={helloCtrls}
          variants={helloVars}
        >
          <Heading
            h="3" 
            label="Say hello at nahiyan.khan@gmail.com" 
            size="2XL"
          />

          <Section>
          <Heading
            h="3" 
            label="Connect at linkedin.com/in/nahiyankhan" 
            size="2XL"
          />
          </Section>
        </HelloContainer>
      </Grid>

    </Section>
  )
}