import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../style/Theme';
import { Socials } from '../socials/Socials';

type MenuPropTypes = {
    menuData: Array<string>;
}

export const MenuMobile = (props: MenuPropTypes) => {
    return (
        <StyledNavMenuMobile>
            <StyledMenuBtn isOpen={true} aria-haspopup='menu'>
                <span aria-hidden='true'/>
            </StyledMenuBtn>

            <StyledMenuPopup isOpen={true} aria-label='Всплывающее окно с меню'>
                <StyledMenuMobile role='menu'>
                    {props.menuData.map(
                        (item: string) => {
                            return <li role='menuitem' key={Math.random() * (10000 - 1) + 1}>
                                <StyledLink href='#' aria-label='Ссылка на раздел'>{item}</StyledLink>
                            </li>
                        })}
                </StyledMenuMobile>
                <Socials />
            </StyledMenuPopup>
        </StyledNavMenuMobile>
    )
}

const StyledNavMenuMobile = styled.nav`
    position: relative;
	width: 70%;

    @media ${theme.media.tablet} {
        display: flex;
    }
`

const StyledMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0%;
    right: 0;
    bottom: 0;

    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(31, 31, 31, 0.9);

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
    `}
`

const StyledMenuBtn = styled.button<{isOpen: boolean}>`
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

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: transparent;
        `}

        &::before {
            content: '';
            position:absolute;
            display: block;
            width: 60px;
            height: 5px;

            transform: translateY(-15px);
            background-color: ${theme.colors.color};

            ${props => props.isOpen && css<{isOpen: boolean}>`
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
            background-color: ${theme.colors.color};

            ${props => props.isOpen && css<{isOpen: boolean}>`
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

const StyledLink = styled.a`
    color: ${theme.colors.color};
    font-size: 2em;

    &:hover {
        color: ${theme.colors.accent};
    }
`