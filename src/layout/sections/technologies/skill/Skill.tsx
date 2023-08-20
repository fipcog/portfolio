import React from 'react'
import styled from 'styled-components'

type SkillPropTipes = {
    title: string;
    skillPercent: string;
}

type StyledSkillPropTypes = {
    skillPercent: string;
}

export const Skill = (props: SkillPropTipes) => {
    return(
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillRange skillPercent={props.skillPercent}/>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    
`
const SkillTitle = styled.h3`
    
`
const SkillRange = styled.div<StyledSkillPropTypes>`
    position: relative;
    width: 900px;
    height: 18px;
    background-color: #162950;

    &::after {
        content: '';
        position: absolute;
        display: block;
        width: ${props => props.skillPercent};
        height: 18px;

        background-color: white;
    }
`