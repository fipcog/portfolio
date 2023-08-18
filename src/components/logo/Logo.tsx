import React from "react";
import logo from "../../logo.svg"

export const Logo = () => {
	return (
		<a href="#">
			<svg width="185" height="48" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref={`${logo}#logo`}/>
			</svg>
		</a>
	)
}
