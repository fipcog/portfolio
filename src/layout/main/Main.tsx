import React from "react";
import { Greetings } from "../sections/greetings/Greetings";
import { Projects } from "../sections/projects/Projects";
import { Technologies } from "../sections/technologies/Technologies";
import { Contact } from "../sections/contact/Contact";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <Greetings />
            <Projects/>
            <Technologies/>
            <Contact/>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    overflow-x: hidden;
`