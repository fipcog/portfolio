import React from 'react'
import styled from 'styled-components'
import { theme } from '../../style/Theme';
import { Socials } from './../socials/Socials';
import { Link } from 'react-scroll';

type MenuPropTypes = {
    menuData: Array<{name: string, id: string}>;
}

type ItemType = {
    name: string,
    id: string
}

export const Menu = (props: MenuPropTypes) => {
    return (
        <StyledNavMenu>
            <StyledMenu role='menu'>
                {props.menuData.map(
                    (item: ItemType) => {
                        return <li role='menuitem' key={Math.random() * (10000 - 1) + 1}>
                            <StyledLink to={item.id} 
                            activeClass="active" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            aria-label='Ссылка на раздел'>{item.name}</StyledLink>
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
`

const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    width: 65%;
`

const StyledLink = styled(Link)`
    color: ${theme.colors.color};

    cursor: pointer;
    transition: .2s;

    &:hover, &.active {
        color: ${theme.colors.accent};
    }
`