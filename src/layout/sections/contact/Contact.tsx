import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { StyledBtn } from '../../../components/btn/Btn'

export const Contact = () => {
    return(
        <StyledContactSection>
            <StyledSectionTitle>Contact</StyledSectionTitle>
            <StyledForm>
                <StyledTextInput placeholder='Name'/>
                <StyledTextInput placeholder='Subject'/>
                <StyledMessage placeholder='Your Message'/>
                <StyledBtn>Send message</StyledBtn>
            </StyledForm>
        </StyledContactSection>
    )
}

const StyledContactSection = styled.section`
    display: flex;
    flex-direction: column;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    
`
const StyledTextInput = styled.input`
    
`
const StyledMessage = styled.textarea`
    
`
