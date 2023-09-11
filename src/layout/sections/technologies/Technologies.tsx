import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import { AdditionalTech } from '../additionaltechnologies/AdditionalTech'
import { Container } from '../../../components/Container'
import { Slide } from "react-awesome-reveal";

export const Technologies = () => {
    return (
        <StyledSection id='technologies'>
            <Container>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <Slide triggerOnce style={{width: '100%'}} fraction={1}>
                        <StyledSectionTitle alignSelf='baseline'>Technologies</StyledSectionTitle>
                    </Slide>
                    <FlexWrapper as='ul' direction='column' justify='center' align='center' aria-label='Список основных навыков автора'>
                        <Skill title='HTML' skillPercent='80%' />
                        <Skill title='Css, Sass' skillPercent='75%' />
                        <Skill title='React' skillPercent='70%' />
                        <Skill title='Styled components' skillPercent='75%' />
                    </FlexWrapper>
                    <AdditionalTech />
                </FlexWrapper>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    padding-top: 100px;
    padding-bottom: 140px;

`