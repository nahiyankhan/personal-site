import { motion } from "framer-motion"
import styled from 'styled-components'
import Heading from './heading'
import Grid from './grid'
import Section from './section'
import Khan from './khan'

const IntroContainer = styled(motion.div)`
  grid-column-start: 1;
  grid-column-end: 24;

  margin-bottom: 5rem;
`

const tagline = 'UX | Front-End | Design Systems'

export default function Intro() {

  const taglineMotion = {
    hidden: { 
      opacity: 0,
      x: '-5rem' 
    },
    show: { 
      opacity: 1,
      x: 0,
      transition: {
        delay: 2.5,
        duration: 2,
        ease: [.25,.8,.25,1]
      }
    }
  }

  return (
    <Section centered fullpage>
      <Grid>
        <IntroContainer>
          <Khan />
          <motion.div 
            variants={taglineMotion}
            initial="hidden"
            animate="show"
          >
            <Heading 
              h="2" 
              label={tagline} 
              size="L"
              variation="uppercase"
            />
          </motion.div>
        </IntroContainer>
      </Grid>
    </Section>
  )
}