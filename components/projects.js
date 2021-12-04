import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from './heading'
import Title from './title'
import Section from './section'
import Grid from './grid'
import Project from './project'
import CurvedArrow from './icons/curvedArrow'
import useAnimateIn from './hooks/useAnimateIn'

const TitleContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 24;
`

const HighlightsContainer = styled(motion.div)`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 24;
  margin-top: 140px;
  margin-bottom: 140px;

  display: flex;
`

export default function Projects() {
  const {
    ref: highlightRef,
    ctrls: highlightCtrls,
    vars: highlightVars,
  } = useAnimateIn({
    threshold: 0.75,
  });

  return (
    <Section fullpage>
      <Section>
        <Grid>
          <TitleContainer>
            <Title title={'projects'} />
          </TitleContainer>
        </Grid>
      </Section>

      <Grid>
        <HighlightsContainer
          ref={highlightRef}
          animate={highlightCtrls}
          variants={highlightVars}
        >
          <Heading
            h="3" 
            label="My proudest work includes" 
            size="2XL"
          />
          <CurvedArrow />
        </HighlightsContainer>
      </Grid>

      <Project 
        title="Design Tokens"
        tagline="Building a multi-device multi-technology styles infrastructure"
      />

      <Project 
        title="Color Palette"
        tagline="Designing a predictably accessible brand-aligned product color palette"
      />

      <Project 
        title="Design Systems Site"
        tagline="Building a design systems documentation site"
      />
    </Section>
  )
}