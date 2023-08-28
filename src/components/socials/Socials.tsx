import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../style/Theme";

export const Socials = () => {
	return (
		<SocialsWrapper>
			<FlexWrapper as='ul' justify="space-between">
				<StyledLisItem>
					<StyledLink href="#" aria-label='Ссылка на страницу гитхаб'>
						<Icon iconId="github" />
					</StyledLink>
				</StyledLisItem>
				<StyledLisItem>
					<StyledLink href="#" aria-label='Ссылка на страницу линкедин'>
						<Icon iconId="in" />
					</StyledLink>
				</StyledLisItem>
				<StyledLisItem>
					<StyledLink href="#" aria-label='Ссылка на телеграмм автора'>
						<Icon iconId="tg" width="35px" height="30px" />
					</StyledLink>
				</StyledLisItem>
			</FlexWrapper>
		</SocialsWrapper>
	)
}

const SocialsWrapper = styled.div`
	width: 150px;
	height: 32px;
`

const StyledLisItem = styled.li`
	
`

const StyledLink = styled.a`
	&:first-child {
		fill: ${theme.colors.color};
	}

	&:hover {
		&:first-child {
			fill: ${theme.colors.accent};
		}
	}
`