import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from 'styled-components'
import Paragraph from './paragraph'
import Khan from './khan'

const HeaderContainer = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 140px;
  padding: 0 140px;
  overflow: hidden;
  z-index: 10;
`

const HeaderBackground = styled.div`
  background: radial-gradient(farthest-corner at 40px 40px, #18181a 0%, #151216 100%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

const HeaderContent = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  margin-left: 1px;
`

const MenuContainer = styled.div`
  position: relative;
`

const Menu = styled.ul`
  list-style: none;
  display: flex;

`

const MenuItem = styled.li`
  margin-right: 80px;
`

const tagline = 'UX | Front-End | Design Systems'

export default function Header() {
  const { scrollY } = useViewportScroll();
  const moveUp = useTransform(scrollY, [0, 780], [170, 0])

  return (
    <HeaderContainer>
      <HeaderBackground />
      <HeaderContent
        style={{
          y: moveUp
        }}
      >
        <LogoContainer>
          <Khan small={true}/>

          <Paragraph 
            label={tagline} 
            size="S"
            variation="uppercase"
            color="slate"
          />
        </LogoContainer>

        <MenuContainer>
          <Menu>
            <MenuItem>
              About
            </MenuItem>
            <MenuItem>
              Projects
            </MenuItem>
            <MenuItem>
              Contact
            </MenuItem>
          </Menu>
        </MenuContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}