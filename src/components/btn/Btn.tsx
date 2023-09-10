import React from 'react'
import styled from 'styled-components'
import { theme } from '../../style/Theme';

type StyledBtnTypes = {
    width?: string;
    height?:string;
}

export const StyledBtn = styled.button<StyledBtnTypes>`
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '60px'};

    border: none;
    border-radius: 80px;
    background-image: linear-gradient(to left, ${theme.colors.accentGradient.from} 20%, ${theme.colors.accentGradient.middle} 50%, ${theme.colors.accentGradient.to} 90%);

    color: ${theme.colors.color};
    font-size: 20px;
    font-weight: 600;

    cursor: pointer;
    transition: .2s;

    &:hover {
        background-image: linear-gradient(to left, ${theme.colors.accentGradient.from} 20%, ${theme.colors.accentGradient.middle} 40%, ${theme.colors.accentGradient.to} 70%);
        color: #FFFFFF;
    }

    &:active {
        transform: translateY(1px);
    }
`

export const StyledBtnLink = styled(StyledBtn)`
    display: flex;
    justify-content: center;
    align-items: center;

    
`