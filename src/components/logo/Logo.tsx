import React from "react";
import logo from "../../logo.svg"
import styled from "styled-components";
import { theme } from "../../style/Theme";

export const Logo = () => {
	return (
		<StyledLogo href="#" role='banner' aria-label='Логотип-ссылка на начало страницы'>
			<svg width="185" height="48" viewBox="0 0 185 48" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref={`${logo}#logo`}/>
			</svg>
		</StyledLogo>
	)
}


const StyledLogo = styled.a`
	height: 48px;

	&:first-child {
		fill: ${theme.colors.color};
	}

	&:hover {
		&:first-child {
			fill: ${theme.colors.accent};
		}
	}
`