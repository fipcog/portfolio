import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { StyledBtn } from '../../../components/btn/Btn'
import { Container } from './../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../style/Theme';

export const Contact = () => {
    return (
        <StyledContactSection>
            <Container>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <StyledSectionTitle alignSelf='baseline'>Contact</StyledSectionTitle>
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
    padding-top: 100px;
    padding-bottom: 140px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledTextInput = styled.input`
    width: 540px;
    height: 32px;

    margin-bottom: 15px;
    padding: 5px 15px;

    border: 1px solid ${theme.colors.border};
    border-radius: 12px 0;
    background: ${theme.colors.primaryBgr};

    color: ${theme.colors.color};
`
const StyledMessage = styled.textarea`
    width: 540px;
    height: 155px;

    margin-bottom: 60px;
    padding: 5px 15px;

    border: 1px solid ${theme.colors.border};
    border-radius: 12px 0;
    background: ${theme.colors.primaryBgr};

    color: ${theme.colors.color};
`
