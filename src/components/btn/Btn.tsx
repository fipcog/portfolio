import React from 'react'
import styled from 'styled-components'

type StyledBtnTypes = {
    width?: string;
    height?:string;
}

export const StyledBtn = styled.button<StyledBtnTypes>`
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '60px'};
`