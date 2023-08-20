import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import { AdditionalTech } from '../additionaltechnologies/AdditionalTech'

export const Technologies = () => {
    return(
        <StyledSection>
            <StyledSectionTitle>Technologies</StyledSectionTitle>
            <FlexWrapper direction='column' justify='center' align='senter'>
                <Skill title='HTML' skillPercent='80%'/>
                <Skill title='Css, Sass' skillPercent='75%'/>
                <Skill title='React' skillPercent='70%'/>
                <Skill title='Styled components' skillPercent='75%'/>
            </FlexWrapper>
            <AdditionalTech/>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    
`