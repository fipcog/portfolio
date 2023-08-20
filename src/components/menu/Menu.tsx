import React from 'react'
import styled from 'styled-components'

type MenuPropTypes = {
    menuData: Array<string>;
}

export const Menu = (props: MenuPropTypes) => {
    return (
        <StyledMenu>
            {props.menuData.map(
                (item: string) => {
                    return <li key={Math.random() * (10000 - 1) + 1}>
                        <a href='#'>{item}</a>
                    </li>
                })}
        </StyledMenu>
    )
}

const StyledMenu = styled.ul`
    
`