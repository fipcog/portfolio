import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../style/Theme';

type SkillPropTipes = {
    title: string;
    skillPercent: string;
}

type StyledSkillPropTypes = {
    skillPercent: string;
}

export const Skill = (props: SkillPropTipes) => {
    return(
        <StyledSkill aria-label='Навык'>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillRange skillPercent={props.skillPercent} aria-hidden/>
        </StyledSkill>
    )
}

const StyledSkill = styled.li`
    width: 900px;
    
    margin-bottom: 25px;
`
const SkillTitle = styled.h3`
    font-size: 24px;
    padding-left: 15px;
`
const SkillRange = styled.div<StyledSkillPropTypes>`
    position: relative;
    width: 900px;
    height: 18px;
    background-color: ${theme.colors.skillBgr};
    border-radius: 80px;

    &::after {
        content: '';
        position: absolute;
        display: block;
        width: ${props => props.skillPercent};
        height: 18px;

        background-image: linear-gradient(to left, ${theme.colors.accentGradient.from} 20%, ${theme.colors.accentGradient.middle} 50%, ${theme.colors.accentGradient.to} 90%);
        border-radius: 80px;
    }
`