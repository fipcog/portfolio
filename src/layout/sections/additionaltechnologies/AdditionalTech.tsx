import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Tech } from './technologie/Tech'

export const AdditionalTech = () => {
    return(
        <StyledTechSection>
            <StyledSectionTitle>Additional technologies and skills</StyledSectionTitle>
            <FlexWrapper as='ul' wrap='wrap' justify='center' align='center' gap='0 50px' aria-label='Список дополнительных навыков автора'>
                <Tech iconId='git' width='100px' height='100px' viewBox="0 0 100 100" label='Система гит'/>
                <Tech iconId='git_hub' width='100px' height='100px' viewBox="0 0 100 100" label='Гитхаб'/>
                <Tech iconId='figma' width='100px' height='100px' viewBox="0 0 100 100" label='Фигма'/>
            </FlexWrapper>
        </StyledTechSection>
    )
}

const StyledTechSection = styled.section`
    padding-top: 100px;
`