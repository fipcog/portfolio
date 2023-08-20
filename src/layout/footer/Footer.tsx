import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from './../../components/FlexWrapper';
import { Socials } from '../../components/socials/Socials';

export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper as='address' direction='column'>
                <span>Email:</span>
                <span>artyrsnitko.work@gmail.com</span>
            </FlexWrapper>
            <Socials/>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
`