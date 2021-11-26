import Title from './title'
import Paragraph from './paragraph'
import Section from "./section"
import Grid from "./grid"
import styled from 'styled-components'
import useAnimateIn from './hooks/useAnimateIn'
import { motion } from 'framer-motion'

const StyledTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 18;
`

const StyledParagraph = styled(motion.div)`
  grid-row-start: 2;
  grid-column-start: 8;
  grid-column-end: 22;
  margin-top: 80px;
`

const about = 'I am a designer coder who designs, experiments and tinkers with design systems. I have designed and shipped three systems by taking a holistic and pragmatic approach that carefully balances and orchestrates dependencies.'

export default function About() {
  const {
    ref: textRef,
    ctrls: textCtrls,
    vars: textVars,
  } = useAnimateIn({
    threshold: 0.5,
  });

  return (
    <Section fullpage>
      <Section>
        <Grid>
          <StyledTitle>
            <Title title={'about'} />
          </StyledTitle>
          <StyledParagraph
            ref={textRef}
            animate={textCtrls}
            variants={textVars}
          >
            <Paragraph 
              label={about}
              size="XL"
            />
          </StyledParagraph>
        </Grid>
      </Section>
    </Section>
  )
}