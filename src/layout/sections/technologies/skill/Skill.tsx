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
    min-width: 79%;
    margin-bottom: 25px;
`
const SkillTitle = styled.h3`
    display: inline-block;
    width: 220px;

    font-size: 24px;
    padding-left: 15px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
const SkillRange = styled.div<StyledSkillPropTypes>`
    position: relative;
    width: 100%;
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