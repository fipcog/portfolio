import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "../../components/navigation/Navigation";
import { Socials } from "../../components/socials/Socials";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../style/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <Navigation />
                    <Socials />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 100px;

    background-color: ${theme.colors.primaryBgr};
    z-index: 10;
`
