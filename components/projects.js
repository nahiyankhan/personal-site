import Title from './title'
import Section from './section'
import Grid from './grid'
import Project from './project'

export default function Projects() {
  return (
    <Section fullpage>
      <Section>
        <Grid>
          <Title title={'projects'}/>
        </Grid>
      </Section>

      <Project 
        title="Design Tokens"
        tagline="Building a multi-device multi-technology styles infrastructure"
      />

      <Project 
        title="Color Palette"
        tagline="Designing a predictably accessible brand-aligned product color palette"
      />

      <Project 
        title="Design Systems Documentation"
        tagline="Building a design systems documentation site"
      />
    </Section>
  )
}