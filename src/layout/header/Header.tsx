import React from "react";
import { Logo } from "../../components/logo/Logo";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../style/Theme";
import { Menu } from "../../components/menu/Menu";
import { MenuMobile } from "../../components/menumobile/MenuMobile";

let navData = ['Projects', 'Technologies', 'About me']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <Menu menuData={navData} />
                    <MenuMobile menuData={navData} />
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
