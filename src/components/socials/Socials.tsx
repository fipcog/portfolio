import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Socials = () => {
	return (
		<SocialsWrapper>
			<ul>
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
			</ul>
		</SocialsWrapper>
	)
}

const SocialsWrapper = styled.div`
	
`