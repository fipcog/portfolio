import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

export const Socials = () => {
	return (
		<SocialsWrapper>
			<FlexWrapper as='ul'>
				<li>
					<a href="#">
						<Icon iconId="github"/>
					</a>
				</li>
				<li>
					<a href="#">
						<Icon iconId="in"/>
					</a>
				</li>
				<li>
					<a href="#">
						<Icon iconId="tg" width="35px" height="30px"/>
					</a>
				</li>
			</FlexWrapper>
		</SocialsWrapper>
	)
}

const SocialsWrapper = styled.div`
	
`