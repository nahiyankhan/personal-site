import Title from './title'
import Section from "./section"
import Grid from "./grid"

export default function About() {
  return (
    <Section fullpage>
      <Section>
        <Grid>
          <Title title={'about'} />
        </Grid>
      </Section>
    </Section>
  )
}