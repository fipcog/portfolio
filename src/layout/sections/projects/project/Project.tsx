import React from 'react'
import styled from 'styled-components'
import { AdaptiveImage } from '../../../../components/adaptiveimage/AdaptiveImage'
import { StyledBtn } from '../../../../components/btn/Btn'
import { theme } from '../../../../style/Theme'

type ProjectPropsTypes = {
    srcJpeg: string;
    srcWebp: string;
    projectTitle: string;
    projectDescr: string;
}

export const Project = (props:ProjectPropsTypes) => {
    return (
        <StyledProject aria-label='Карточка работы из портфолио'>
            <AdaptiveImage srcJpeg={props.srcJpeg} srcWebp={props.srcWebp} width='100%' height='280px' bRadius='24px 8px 8px 8px' fit='fill' alt='Project Screen'/>
            <StyledTitle>{props.projectTitle}</StyledTitle>
            <StyledText>{props.projectDescr}</StyledText>
            <StyledBtnLink as='a' href='#' aria-label='Перейти к просмотру работы'>Look It Up</StyledBtnLink>
        </StyledProject>
    )
}

const StyledProject = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 550px;
    max-height: 670px;

    padding: 25px;
    border: 1px solid ${theme.colors.border};
    border-radius: 50px 0px;

    @media (min-width: 769px) and (max-width: 1169px) {
        max-width: 390px;
        
        picture > img {
            height: 200px;
        }
    }

    @media ${theme.media.mobile} {
        max-width: 390px;
        
        picture > img {
            height: 200px;
        }
    }
`

const StyledTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    margin-top: 40px;
    margin-bottom: 65px;

    font-size: 30px;
    line-height: 88.5%;

    &::after {
        content: "";
        display: block;
        width: 300px;
        height: 4px;

        position: absolute;
        bottom: -25px;

        margin: 0 auto;

        background-image: linear-gradient(to left, ${theme.colors.accentGradient.from} 20%, ${theme.colors.accentGradient.middle} 50%, ${theme.colors.accentGradient.to} 90%);

        @media (min-width: 769px) and (max-width: 1169px) {
            width: 200px;
        }

        @media ${theme.media.mobile} {
            width: 200px;
        }
    }
`

const StyledText = styled.p`
    margin-bottom: 50px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`

const StyledBtnLink = styled(StyledBtn)`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: baseline;
`