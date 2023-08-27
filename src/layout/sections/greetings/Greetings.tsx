import React from 'react'
import photo from '../../../assets/images/photo.jpg'
import photoWebp from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { AdaptiveImage } from '../../../components/adaptiveimage/AdaptiveImage'
import styled from 'styled-components'
import { StyledBtn } from '../../../components/btn/Btn'
import { Container } from '../../../components/Container'
import { theme } from '../../../style/Theme'

export const Greetings = () => {
    return (
        <StyledGeetings>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <FlexWrapper direction='column' width='70%' justify='center'>
                        <StyledName>Hello! I am Snitko Artur</StyledName>
                        <StyledHeader>A Web Developer</StyledHeader>
                        <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledText>
                        <StyledBtn width='240px' height='60px'>Let’s Begin</StyledBtn>
                    </FlexWrapper>
                    <SteledImgPhoto>
                        <AdaptiveImage srcJpeg={photo} srcWebp={photoWebp} alt='My Photo' width='380px' height='450px' position='right bottom' collapsePicture={true} bRadius='50px 0px'/>
                    </SteledImgPhoto>
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
`
const StyledName = styled.span`
    font-size: 54px;
    margin-bottom: 15px;
`
const StyledHeader = styled.h1`
    font-size: inherit;
    font-weight: 500;

    margin-bottom: 15px;
`
const StyledText = styled.p`
    margin-bottom: 60px;
`
const SteledImgPhoto = styled.div`
    position: relative;
    min-width: 380px;
    min-height: 450px;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;

        background-image: linear-gradient(to left top, ${theme.colors.accentGradient.from} 20%, ${theme.colors.accentGradient.middle} 50%, ${theme.colors.accentGradient.to} 90%);
        border-radius: 50px 0px;
        z-index: -1;
    }
`