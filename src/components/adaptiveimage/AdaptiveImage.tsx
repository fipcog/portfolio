import React from 'react'
import styled from 'styled-components';

type ImagePropsType = {
    srcJpeg: string;
    srcWebp: string;
    alt: string;
    width?: string;
    height?: string;
    fit?: string;
}
type StyledImagePropsType = {
    width?: string;
    height?: string;
    fit?: string;
}



export const AdaptiveImage = (props:ImagePropsType) => {
    return(
        <picture>
            <source srcSet={props.srcWebp} type='image/webp'/>
            <source srcSet={props.srcJpeg} type='image/jpeg'/>
            <StyledImage src={props.srcJpeg} alt={props.alt} width={props.width} height={props.height} fit={props.fit}/>
        </picture>
    )
}

const StyledImage = styled.img<StyledImagePropsType>`
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '350px'};
    object-fit: ${props => props.fit || 'cover'};
`