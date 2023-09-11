import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Tech } from './technologie/Tech'
import { Bounce } from "react-awesome-reveal";

export const AdditionalTech = () => {
    return(
        <StyledTechSection>
            <Bounce triggerOnce style={{width: '100%'}} fraction={1}>
                <StyledSectionTitle alignSelf='baseline'>Additional technologies and skills</StyledSectionTitle>
            </Bounce>
            <FlexWrapper as='ul' wrap='wrap' justify='center' align='center' gap='50px 50px' aria-label='Список дополнительных навыков автора'>
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