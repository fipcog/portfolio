import React from 'react'
import photo from '../../../assets/images/photo.jpg'
import photoWebp from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { AdaptiveImage } from '../../../components/adaptiveimage/AdaptiveImage'
import styled from 'styled-components'
import { StyledBtn } from '../../../components/btn/Btn'

export const Greetings = () => {
    return (
        <StyledGeetings>
            <FlexWrapper justify='space-around' align='center'>
                <div>
                    <span>Hello! I am Snitko Artur</span>
                    <h1>A Web Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <StyledBtn width='260px'>Let’s Begin</StyledBtn>
                </div>
                <AdaptiveImage srcJpeg={photo} srcWebp={photoWebp} alt='My Photo' width='300px' height='450px'/>
            </FlexWrapper>
        </StyledGeetings>
    )
}


const StyledGeetings = styled.section`

`