import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type TechPropTypes = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    label: string;
}

export const Tech = (props: TechPropTypes) => {
    return(
        <StyledTechIcon aria-label={props.label}>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
        </StyledTechIcon>
    )
}

const StyledTechIcon = styled.li`
    
`