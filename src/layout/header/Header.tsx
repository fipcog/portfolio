import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "../../components/navigation/Navigation";
import { Socials } from "../../components/socials/Socials";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
            <Socials/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
