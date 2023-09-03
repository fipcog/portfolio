import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import { AdditionalTech } from '../additionaltechnologies/AdditionalTech'
import { Container } from '../../../components/Container'

export const Technologies = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <StyledSectionTitle alignSelf='baseline'>Technologies</StyledSectionTitle>
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