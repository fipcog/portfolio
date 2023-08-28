import React from 'react'
import styled from 'styled-components';

type ImagePropsType = {
    srcJpeg: string;
    srcWebp: string;
    alt: string;
    width?: string;
    height?: string;
    fit?: string;
    position?: string;
    bRadius?: string;
    collapsePicture?: boolean;
}
type StyledImagePropsType = {
    width?: string;
    height?: string;
    fit?: string;
    position?: string;
    bRadius?: string;
}

type StyledPicturePropsType = {
    collapsePicture?: boolean;
}



export const AdaptiveImage = (props:ImagePropsType) => {
    return(
        <StyledPicture collapsePicture={props.collapsePicture}>
            <source srcSet={props.srcWebp} type='image/webp'/>
            <source srcSet={props.srcJpeg} type='image/jpeg'/>
            <StyledImage src={props.srcJpeg} alt={props.alt} width={props.width} height={props.height} fit={props.fit} position={props.position} bRadius={props.bRadius}/>
        </StyledPicture>
    )
}

const StyledImage = styled.img<StyledImagePropsType>`
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '350px'};
    object-fit: ${props => props.fit || 'cover'};
    object-position: ${props => props.position || '50% 50%'};
    border-radius: ${props => props.bRadius || '0px'};
`

const StyledPicture = styled.picture<StyledPicturePropsType>`
    display: block;
    height: ${props => (props.collapsePicture && '0px') || 'auto'};

    position: relative;
    z-index: 1;
`