import { useEffect, useState } from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from 'styled-components'
import Paragraph from './paragraph'
import Khan from './khan'
import { useIsMedium, useIsLarge } from './hooks/useMediaQuery'

const HeaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  overflow: hidden;
  z-index: 10;

  ${({ theme }) => theme.medium`
    padding: 0 80px;
    height: 120px;
  `};

  ${({ theme }) => theme.large`
    padding: 0 140px;
    height: 140px;
  `};
`

const HeaderBackground = styled(motion.div)`
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

// Menu

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

// Initial Loading

const headerBGVars = {
  initial: {
    opacity: 0
  },
  start: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.8
    }
  }
}

const tagline = 'UX | Front-End | Design Systems'

export default function Header() {
  const { scrollY } = useViewportScroll();
  const [height, setHeight] = useState(0);
  const isMedium = useIsMedium();
  const isLarge = useIsLarge();
  const moveUp = useTransform(scrollY, [0, 780], [170, 0])

  const headerVars = {
    initial: {
      height: '50vh'
    },
    start: {
      height: height,
      transition: { 
        type: "spring",
        damping: 50,
        stiffness: 100,
        mass: 1, 
        duration: 1.5,
        delay: 1.8
      }
    }
  }

  useEffect(() => {
    if (isLarge) {
      setHeight(140)
    } else if (isMedium) {
      setHeight(120)
    } else {
      setHeight(100)
    }
  }, [isMedium, isLarge])

  return (
    <HeaderContainer
      variants={headerVars}
      initial="initial"
      animate="start"
    >
      <HeaderBackground 
        variants={headerBGVars}
        initial="initial"
        animate="start"
      />
      <HeaderContent
        style={{
          y: moveUp
        }}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 3
        }}
      >
        <LogoContainer>
          <Khan small={true}/>

          <Paragraph 
            label={tagline} 
            size="S"
            variation="uppercase"
            color="hotpink"
          />
        </LogoContainer>

        {/* <MenuContainer>
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
        </MenuContainer> */}
      </HeaderContent>
    </HeaderContainer>
  )
}