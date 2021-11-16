import styled from 'styled-components'
import Header from './heading'
import Grid from './grid'
import Section from './section'
import Title from './title'

const HeroImage = styled.div`
  width: 800px;
  height: 400px;
  background: #858690;

  grid-column-start: none;
`

export default function() {
  return (
    <Section fullpage>
      <Section>
        <Grid>
          <Title title={'projects'}/>
        </Grid>
      </Section>

      <Section>
        <Grid>
        <Header 
            h="3" 
            label={'Design Tokens Implementation'} 
            size="2XL"
          />
          <HeroImage />
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Header 
            h="3" 
            label={'Product Color Palette'} 
            size="2XL"
          />
          <HeroImage />
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Header 
            h="3" 
            label={'Design System Site'} 
            size="2XL"
          />
          <HeroImage />
        </Grid>
      </Section>
    </Section>
  )
}