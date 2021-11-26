import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from 'styled-components'
import Heading from './heading'
import Paragraph from './paragraph'
import Grid from './grid'
import Section from './section'
import Khan from './khan'

const IntroContainer = styled(motion.div)`
  grid-column-start: 1;
  grid-column-end: 10;
`

const LogoContainer = styled(motion.div)`
  grid-column-start: 1;
  grid-column-end: 15;
`

const tagline = 'UX Engineering | Design Systems'
const intro = 'I am a designer coder who designs, experiments and tinkers with design systems and design automation.'

export default function Intro() {

  const containerMotion = {
    hidden: { 
    },
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2,
        ease: [.25,.8,.25,1]
      },
    },
  }

  const childMotion = {
    hidden: { opacity: 0, scale: 0.90, x: 5 },
    show: { 
      opacity: 1, 
      scale: 1, x: 0,
      transition: {
        duration: 2,
        ease: [.25,.8,.25,1]
      }
    }
  }

  return (
    <Section centered fullpage>
      <Grid>
        <LogoContainer>
          <Khan />
        </LogoContainer>

        <IntroContainer>
          <motion.div
            variants={containerMotion}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={childMotion}>
              <Heading 
                h="2" 
                label={tagline} 
                size="XL"
              />
            </motion.div>

            <motion.div variants={childMotion}>
              <Paragraph 
                label={intro} 
                size="L"
              />
            </motion.div>
            <motion.div variants={childMotion}>
              <Paragraph 
                label={"Say hello at nahiyan.khan@gmail.com"} 
                size="L"
              />
            </motion.div>
          </motion.div>
        </IntroContainer>
      </Grid>
    </Section>
  )
}