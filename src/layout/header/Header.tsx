import React from "react";
import { Logo } from "../../components/logo/Logo";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../style/Theme";
import { Menu } from "../../components/menu/Menu";
import { MenuMobile } from "../../components/menumobile/MenuMobile";

let navData = [
    {
        name:'Projects',
        id: 'projects'
    },
    {
        name:'Technologies',
        id: 'technologies'
    },
    {
        name:'Contact me',
        id: 'contact'
    }   
]

export const Header = () => {
    
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)

        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    return (
        <StyledHeader id="header">
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    {
                        width < breakpoint ? <MenuMobile menuData={navData}/> : <Menu menuData={navData}/>
                    }
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    width: 100%;
    height: 100px;

    background-color: ${theme.colors.primaryBgr};
    z-index: 10;
`
