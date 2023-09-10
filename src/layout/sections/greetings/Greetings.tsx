import React from 'react'
import photo from '../../../assets/images/photo.jpg'
import photoWebp from '../../../assets/images/photo.webp'
import bgrImage from '../../../assets/images/background-element.svg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { AdaptiveImage } from '../../../components/adaptiveimage/AdaptiveImage'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { theme } from '../../../style/Theme'
import { Link } from 'react-scroll'

type SteledImgPhotoPropTypes = {
    bgrImage: string;
}

export const Greetings = () => {
    return (
        <StyledGeetings id='greetings'>
            <Container>
                <FlexWrapper as={StyledFlexWrapperAdaptive} justify='space-between' align='center'>
                    <FlexWrapper as={StyledFlexWrapperText} direction='column' width='50%' justify='center' role='contentinfo'>
                        <StyledName aria-label='Представление автора'>Hello! I am Snitko Artur</StyledName>
                        <StyledHeader aria-label='Специальность автора'>A Web Developer</StyledHeader>
                        <StyledText aria-label='Послание от автора'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledText>
                        <StyledLink to='projects' smooth={true} aria-label='Начать ознакомление'>Let’s Begin</StyledLink>
                    </FlexWrapper>
                    <StyledImgPhoto bgrImage={bgrImage}> 
                        <AdaptiveImage
                            srcJpeg={photo} srcWebp={photoWebp} alt='Фото автора'
                            width='380px' height='450px' position='right bottom' collapsePicture={true} bRadius='50px 0px'/>
                    </StyledImgPhoto>
                </FlexWrapper>
            </Container>
        </StyledGeetings>
    )
}


const StyledGeetings = styled.section`
    min-height: 700px;
    height: 100%;

    padding-top: 225px;
    padding-bottom: 125px;

    @media ${theme.media.mobile} {
        padding-top: 125px;
    }
`
const StyledName = styled.span`
    font-size: 54px;
    margin-bottom: 15px;

    @media screen and (max-width: 900px) {
        text-align: center;
    }
`
const StyledHeader = styled.h1`
    font-size: inherit;
    font-weight: 500;

    margin-bottom: 15px;

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
        text-align: center;
    }
`
const StyledText = styled.p`
    display: flex;
    max-width: 480px;
    margin-bottom: 60px;

    @media screen and (max-width: 900px) {
        text-align: center;
    }
`
const StyledImgPhoto = styled.div<SteledImgPhotoPropTypes>`
    position: relative;
    min-width: 380px;
    min-height: 450px;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;

        background-image: linear-gradient(to left top, ${theme.colors.accentGradient.from} 20%, ${theme.colors.accentGradient.middle} 50%, ${theme.colors.accentGradient.to} 90%);
        border-radius: 50px 0px;
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -277px;

        width: 666px;
        height: 666px;

        background-image: url(${props => props.bgrImage});
        background-position: center;
        background-repeat: no-repeat;
    }

    @media screen and (max-width: 900px) {
        order: 1;
    }
`
const StyledFlexWrapperText = styled(FlexWrapper)`

    @media screen and (max-width: 900px) {
        justify-content: center;
        align-items: center;

        max-width: 90%;

        margin-top: 60px;

        order: 2;
        z-index: 1;
    }
`
const StyledFlexWrapperAdaptive = styled(FlexWrapper)`
    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 240px;
    height: 60px;

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