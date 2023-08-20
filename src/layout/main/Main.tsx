import React from "react";
import { Greetings } from "../sections/greetings/Greetings";
import { Projects } from "../sections/projects/Projects";
import { Technologies } from "../sections/technologies/Technologies";

export const Main = () => {
    return (
        <main>
            <Greetings />
            <Projects/>
            <Technologies/>
        </main>
    )
}