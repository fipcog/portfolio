import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { StyledBtn } from '../../../components/btn/Btn'
import { Container } from './../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../style/Theme';
import { Slide } from "react-awesome-reveal";

export const Contact = () => {
    return (
        <StyledContactSection id='contact'> 
            <Container>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <Slide triggerOnce style={{width: '100%'}} fraction={1}>
                        <StyledSectionTitle alignSelf='baseline'>Contact Me</StyledSectionTitle>
                    </Slide>
                    <StyledForm name='contact' role='form' aria-label='Форма контакта с автором'>
                        <StyledTextInput placeholder='Name' aria-placeholder='Введите имя'/>
                        <StyledTextInput placeholder='Subject' aria-placeholder='Введите Тему Сообщения'/>
                        <StyledMessage placeholder='Your Message' aria-placeholder='Введите ваше сообщение'/>
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

    width: 100%;
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

    @media ${theme.media.mobile} {
        width: 100%;
    }
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

    @media ${theme.media.mobile} {
        width: 100%;
    }
`
