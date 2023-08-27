import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from './../../components/FlexWrapper';
import { Socials } from '../../components/socials/Socials';
import { Container } from '../../components/Container';
import { Logo } from '../../components/logo/Logo';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper align='center' justify='space-between'>
                    <FlexWrapper as='address' direction='column' justify='center'>
                        <span>Email:</span>
                        <span>artyrsnitko.work@gmail.com</span>
                    </FlexWrapper>
                    <Socials />
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    width: 100%;
    height: 100px;
`