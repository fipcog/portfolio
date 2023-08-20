import React from "react";
import { Greetings } from "../sections/greetings/Greetings";
import { Projects } from "../sections/projects/Projects";
import { Technologies } from "../sections/technologies/Technologies";
import { Contact } from "../sections/contact/Contact";

export const Main = () => {
    return (
        <main>
            <Greetings />
            <Projects/>
            <Technologies/>
            <Contact/>
        </main>
    )
}