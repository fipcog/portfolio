import React from "react";
import { Greetings } from "../sections/greetings/Greetings";
import { Projects } from "../sections/projects/Projects";

export const Main = () => {
    return (
        <main>
            <Greetings />
            <Projects/>
        </main>
    )
}