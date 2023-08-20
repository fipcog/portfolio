import React from 'react'
import styled from 'styled-components'
import { AdaptiveImage } from '../../../../components/adaptiveimage/AdaptiveImage'
import { StyledBtn } from '../../../../components/btn/Btn'

type ProjectPropsTypes = {
    srcJpeg: string;
    srcWebp: string;
    projectTitle: string;
    projectDescr: string;
}

export const Project = (props:ProjectPropsTypes) => {
    return (
        <StyledProject>
            <AdaptiveImage srcJpeg={props.srcJpeg} srcWebp={props.srcWebp} width='550px' height='280px' alt='Project Screen'/>
            <h3>{props.projectTitle}</h3>
            <p>{props.projectDescr}</p>
            <StyledBtn>Look It Up</StyledBtn>
        </StyledProject>
    )
}

const StyledProject = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 550px;
`