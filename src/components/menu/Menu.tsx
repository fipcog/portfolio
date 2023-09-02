import React from 'react'
import styled from 'styled-components'
import { theme } from '../../style/Theme';
import { Socials } from './../socials/Socials';

type MenuPropTypes = {
    menuData: Array<string>;
}

export const Menu = (props: MenuPropTypes) => {
    return (
        <StyledNavMenu>
            <StyledMenu role='menu'>
                {props.menuData.map(
                    (item: string) => {
                        return <li role='menuitem' key={Math.random() * (10000 - 1) + 1}>
                            <StyledLink href='#' aria-label='Ссылка на раздел'>{item}</StyledLink>
                        </li>
                    })}
            </StyledMenu>
            <Socials />
        </StyledNavMenu>
    )
}

const StyledNavMenu = styled.nav`
    display: flex;
	justify-content: space-between;
	width: 70%;

    @media ${theme.media.tablet} {
        display: none;
    }
`

const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    width: 65%;

    li + li {
        /* margin-left: 80px; */
    }
`

const StyledLink = styled.a`
    color: ${theme.colors.color};

    &:hover {
        color: ${theme.colors.accent};
    }
`