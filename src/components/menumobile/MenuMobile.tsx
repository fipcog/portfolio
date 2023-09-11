import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../style/Theme';
import { Socials } from '../socials/Socials';
import { Link } from 'react-scroll';

type MenuPropTypes = {
    menuData: Array<{name: string, id: string}>;
}

type ItemType = {
    name: string,
    id: string
}

export const MenuMobile = (props: MenuPropTypes) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <StyledNavMenuMobile>
            <StyledMenuBtn onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} aria-haspopup='menu'>
                <span aria-hidden='true' />
            </StyledMenuBtn>

            <StyledMenuPopup isOpen={isMenuOpen} aria-hidden={!isMenuOpen} aria-label='Всплывающее окно с меню'>
                <StyledMenuMobile role='menu'>
                    {props.menuData.map(
                        (item:ItemType) => {
                            return <li role='menuitem' key={Math.random() * (10000 - 1) + 1}>
                                <StyledLink to={item.id}
                                            activeClass="active" 
                                            spy={true}
                                            smooth={true} 
                                            offset={-100}
                                            aria-label='Ссылка на раздел' 
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}>{item.name}</StyledLink>
                            </li>
                    })}
                </StyledMenuMobile>
                <Socials />
            </StyledMenuPopup>
        </StyledNavMenuMobile>
    )
}

const StyledNavMenuMobile = styled.nav`
    display: flex;
    position: relative;
	width: 70%;
`

const StyledMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0%;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(31, 31, 31, 0.9);
    transition: .2s;
    transform: translateX(-100%);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateX(0);
    `}
`

const StyledMenuBtn = styled.button<{ isOpen: boolean }>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 25px;
    right: 15px;

    width: 60px;
    height: 60px;

    z-index: 99999;

    background-color: transparent;
    border: none;

    span {
        position: relative;
        display: block;
        width: 60px;
        height: 5px;
        
        background-color: ${theme.colors.color};
        transition: .1s ease-in-out;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: transparent;
        `}

        &::before {
            content: '';
            position:absolute;
            display: block;
            width: 60px;
            height: 5px;

            transform: translateY(-15px);
            transition: .2s ease-in-out;
            background-color: ${theme.colors.color};

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(45deg);
            `}
        }

        &::after {
            content: '';
            position:absolute;
            display: block;
            width: 60px;
            height: 5px;

            transform: translateY(15px);
            transition: .2s ease-in-out;
            background-color: ${theme.colors.color};

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(-45deg);
            `}
        }
    }
`

const StyledMenuMobile = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 65%;

    li {
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 120px;
        }
    }
`

const StyledLink = styled(Link)`
    color: ${theme.colors.color};
    font-size: 2em;
    transition: .2s;

    &:hover, &.active {
        color: ${theme.colors.accent};
    }
`