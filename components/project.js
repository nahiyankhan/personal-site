import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Parallax } from "react-scroll-parallax";
import Heading from './heading'
import Paragraph from './paragraph'
import Grid from './grid'
import Section from './section'
import useAnimateIn from './hooks/useAnimateIn'

const HeroImage = styled(motion.div)`
  width: 1000px;
  height: 800px;
  background: #858690;

  grid-row-start: 1;
  grid-column-start: 12;
  grid-row-end: 1;
  grid-column-end: 24;
  z-index: 4;

  position: absolute;
`

const ProjectTitle = styled(Parallax)`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 14;
  z-index: 5;
`

export default function Project({ title, tagline }) {
  const {
    ref: textRef,
    ctrls: textCtrls,
    vars: textVars,
  } = useAnimateIn({
    threshold: 0.5,
    distance: '-5rem'
  });

  const {
    ref: imageRef,
    ctrls: imageCtrls,
    vars: imageVars,
  } = useAnimateIn({
    threshold: 0.5,
    distance: '15rem',
    endpoint: '10rem'
  });
  
  return (
    <Section fullpage centered>
      <Grid center={true}>
        <ProjectTitle y={[-20, 20]}>
          <motion.div
            ref={textRef}
            animate={textCtrls}
            variants={textVars}
          >
            <Heading 
              h="3" 
              label={title} 
              size="2XL"
            />
            <Paragraph 
              label={tagline}
              size="XL"
            />
          </motion.div>
        </ProjectTitle>
        <HeroImage 
          ref={imageRef}
          animate={imageCtrls}
          variants={imageVars}
        />
      </Grid>
    </Section>
  )
}