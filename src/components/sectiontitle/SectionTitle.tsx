import React from 'react'
import styled from 'styled-components'
import { theme } from '../../style/Theme';

type SectionTitlePropTypes = {
    alignSelf?: string;
}

export const StyledSectionTitle = styled.h2<SectionTitlePropTypes>`
    align-self: ${props => props.alignSelf || 'auto'};
    padding-bottom: 70px;

    font-size: 46px;

    @media screen and (max-width: 900px) {
        align-self: center;
        text-align: center;
    }
` 