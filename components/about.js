import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Parallax } from "react-scroll-parallax";

import Title from './title'
import Paragraph from './paragraph'
import Heading from './heading'
import Section from "./section"
import Grid from "./grid"
import AboutPic from "../public/images/nahiyan-khan-pic.jpg"
import FreyjaPic from "../public/images/freyja-pic.jpg"
import useAnimateIn from './hooks/useAnimateIn'

import DiagonalLine from './diagonalLine';

const TitleContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 18;
`

const HelloContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 24;
  margin-bottom: 120px;
`

const AboutPicture = styled(motion.div)`
  grid-row-start: 1;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 14;

  ${({ theme }) => theme.medium`
    grid-column-start: 1;
    grid-column-end: 9;
  `}

  clip-path: polygon(33.5% 0,100% 0,100% 56%,53% 100%,0 100%,0% 31%);
  filter: grayscale(0.2);
`

const AboutText = styled(Parallax)`
  grid-row-start: 4;
  grid-row-end: 6;
  grid-column-start: 2;
  grid-column-end: 24;

  ${({ theme }) => theme.medium`
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 8;
    grid-column-end: 22;
  `}

  ${({ theme }) => theme.large`
    grid-column-start: 8;
    grid-column-end: 16;
  `}
`

const DesigningIdeasContainer = styled(Parallax)`
  grid-column-start: 8;
  grid-column-end: 24;
  grid-row-start: 3;
  grid-row-end: 5;
`

const DesigningIdeas = styled(motion.div)`
  display: flex;
  align-items: center;
`

const And = styled(motion.div)`
  margin: 0 10px;
`

const FreyjaText = styled(Parallax)`
  grid-row-start: 6;
  grid-column-start: 2;
  grid-column-end: 24;

  ${({ theme }) => theme.medium`
    grid-column-start: 10;
    grid-column-end: 18;
  `}
`

const FreyjaPicture = styled(motion.div)`
  grid-row-start: 7;
  grid-row-end: 9;
  grid-column-start: 8;
  grid-column-end: 24;

  ${({ theme }) => theme.medium`
    grid-column-start: 15;  
    grid-row-start: 5;
    grid-row-end: 7;
  `}

  ${({ theme }) => theme.large`
    
  `}

  clip-path: polygon(27.5% 0,100% 0,100% 45%,46% 100%,0 100%,0% 31%);
  filter: grayscale(0.2);
`

const about = 'I am a designer coder with a passion for design systems, scalable front-ends and snazzy interfaces with just the right feel.'
const cat = 'Oh, and I am a cat dad too.';

export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const lineHeight = useTransform(scrollYProgress, [0.16, 0.38], [0, 3200]);

  const {
    ref: aboutTextRef,
    ctrls: aboutTextCtrls,
    vars: aboutTextVars,
  } = useAnimateIn({
    threshold: 0.75,
  });

  const {
    ref: aboutPictureRef,
    ctrls: aboutPictureCtrls,
    vars: aboutPictureVars,
  } = useAnimateIn({
    threshold: 0.5,
    distance: '-5rem'
  });

  const {
    ref: designingTextRef,
    ctrls: designingTextCtrls,
    vars: designingTextVars,
  } = useAnimateIn({
    threshold: 0.5
  });

  const {
    ref: freyjaTextRef,
    ctrls: freyjaTextCtrls,
    vars: freyjaTextVars,
  } = useAnimateIn({
    threshold: 0.75,
    distance: '-5rem'
  });

  const {
    ref: freyjaPictureRef,
    ctrls: freyjaPictureCtrls,
    vars: freyjaPictureVars,
  } = useAnimateIn({
    threshold: 0.5
  });

  return (
    <Section fullpage>
      <Section>
        <Grid>
          <TitleContainer>
            <Title title={'about'} />
          </TitleContainer>
        </Grid>
      </Section>

      <Section>
        <DiagonalLine />
        <Grid>
          <HelloContainer>
            <Heading 
              h="3"
              label="I am Khan."
              size="2XL"
            />
          </HelloContainer>
        </Grid>
        <Grid>
          <AboutPicture
            ref={aboutPictureRef}
            animate={aboutPictureCtrls}
            variants={aboutPictureVars}
          >
            <Image
              src={AboutPic}
              alt="Nahiyan Khan"
            />
          </AboutPicture>
          <AboutText y={[-20, 20]}>
            <motion.div
              ref={aboutTextRef}
              animate={aboutTextCtrls}
              variants={aboutTextVars}
            >
              <Paragraph 
                label={about}
                size="XL"
              />
            </motion.div>
          </AboutText>

          {/* <LinesContainer>
            <LineDiagonal 
              style={{
                height: lineHeight
              }}
            />
          </LinesContainer> */}

          {/* <DesigningIdeasContainer y={[-20, 20]}>
            <DesigningIdeas
              ref={designingTextRef}
              animate={designingTextCtrls}
              variants={designingTextVars}
            >
              <Paragraph 
                label="I enjoy designing ideas"
                size="XL"
              />
              <And
                style={{
                  color: andColor
                }}
              >
                <Paragraph 
                  label="and"
                  size="XL"
                />
              </And>
              <Paragraph 
                label="bringing them to life."
                size="XL"
              />
            </DesigningIdeas>
          </DesigningIdeasContainer> */}

          <FreyjaPicture
            ref={freyjaPictureRef}
            animate={freyjaPictureCtrls}
            variants={freyjaPictureVars}
          >
            <Image 
              src={FreyjaPic}
              alt="Freyja"
            />
          </FreyjaPicture>
          <FreyjaText y={[-20, 20]}>
            <motion.div
              ref={freyjaTextRef}
              animate={freyjaTextCtrls}
              variants={freyjaTextVars}
            >
              <Paragraph 
                label={cat}
                size="XL"
              />
            </motion.div>
          </FreyjaText>
          
        </Grid>
      </Section>

      <Grid>
        
      </Grid>

    </Section>
  )
}