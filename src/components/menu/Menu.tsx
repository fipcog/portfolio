import React from 'react'
import styled from 'styled-components'
import { theme } from '../../style/Theme';

type MenuPropTypes = {
    menuData: Array<string>;
}

export const Menu = (props: MenuPropTypes) => {
    return (
        <StyledMenu role='menu'>
            {props.menuData.map(
                (item: string) => {
                    return <li role='menuitem' key={Math.random() * (10000 - 1) + 1}>
                        <StyledLink href='#' aria-label='Ссылка на раздел'>{item}</StyledLink>
                    </li>
                })}
        </StyledMenu>
    )
}

const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    li + li {
        margin-left: 80px;
    }
`

const StyledLink = styled.a`
    color: ${theme.colors.color};

    &:hover {
        color: ${theme.colors.accent};
    }
`