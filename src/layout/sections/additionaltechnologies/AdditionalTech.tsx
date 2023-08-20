import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Tech } from './technologie/Tech'

export const AdditionalTech = () => {
    return(
        <StyledTechSection>
            <StyledSectionTitle>Additional technologies and skills</StyledSectionTitle>
            <FlexWrapper wrap='wrap' justify='space-around' align='center' >
                <Tech iconId='git' width='100px' height='100px' viewBox="0 0 100 100"/>
                <Tech iconId='git_hub' width='100px' height='100px' viewBox="0 0 100 100"/>
                <Tech iconId='figma' width='100px' height='100px' viewBox="0 0 100 100"/>
            </FlexWrapper>
        </StyledTechSection>
    )
}

const StyledTechSection = styled.section`
    
`