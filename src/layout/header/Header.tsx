import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "../../components/navigation/Navigation";
import { Socials } from "../../components/socials/Socials";

export const Header = () => {
    return (
        <>
            <Logo/>
            <Navigation/>
            <Socials/>
        </>
    )
}
