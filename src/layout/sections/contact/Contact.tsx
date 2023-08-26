import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { StyledBtn } from '../../../components/btn/Btn'
import { Container } from './../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Contact = () => {
    return (
        <StyledContactSection>
            <Container>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <StyledSectionTitle>Contact</StyledSectionTitle>
                    <StyledForm>
                        <StyledTextInput placeholder='Name' />
                        <StyledTextInput placeholder='Subject' />
                        <StyledMessage placeholder='Your Message' />
                        <StyledBtn>Send message</StyledBtn>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContactSection>
    )
}

const StyledContactSection = styled.section`

`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    
`
const StyledTextInput = styled.input`
    
`
const StyledMessage = styled.textarea`
    
`
