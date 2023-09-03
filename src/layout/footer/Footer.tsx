import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from './../../components/FlexWrapper';
import { Socials } from '../../components/socials/Socials';
import { Container } from '../../components/Container';
import { Logo } from '../../components/logo/Logo';
import { theme } from '../../style/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledFlexWrapperAdaptive align='center' justify='space-between'>
                    <StyledFlexWrapperAddress as='address' direction='column' justify='center'>
                        <span>Email:</span>
                        <span>artursnitko.work@gmail.com</span>
                    </StyledFlexWrapperAddress>
                    <Socials />
                </StyledFlexWrapperAdaptive>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    min-height: 100px;

    @media ${theme.media.mobile} {
        padding-top:40px;
        padding-bottom: 40px;
    }
`

const StyledFlexWrapperAdaptive = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const StyledFlexWrapperAddress = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
        text-align: center;
        margin-bottom: 20px;
    }
`