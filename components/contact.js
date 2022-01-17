import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from './heading'
import Title from './title'
import Paragraph from './paragraph'
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

const Divider = styled.div`
  width: 100%;
  height: 80px;
`

export default function Contact() {

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
      
      <Grid>
        <Title title={'contact'} />
      </Grid>

      <Grid>
        <HelloContainer
          ref={helloRef}
          animate={helloCtrls}
          variants={helloVars}
        >
          <Heading
            h="3" 
            label="Say hello at" 
            size="2XL"
          />
          <Paragraph 
            label="nahiyan.khan@gmail.com"
            size="2XL"
          />

          <Divider />

          <Heading
            h="3" 
            label="Connect at" 
            size="2XL"
          />
          <Paragraph 
            label="linkedin.com/in/nahiyankhan"
            size="2XL"
          />

        </HelloContainer>
      </Grid>

    </Section>
  )
}