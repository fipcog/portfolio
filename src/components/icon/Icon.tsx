import React from "react";
import iconsSprite from "../../assets/images/iconsSprite.svg"

type iconPropsType = {
	iconId: string;
	width?: string;
	height?: string;
	viewBox?: string;
}

export const Icon = (props:iconPropsType) => {
	return (
		<svg width={props.width || "35"} height={props.height || "30"} viewBox={props.viewBox || "0 0 35 30"} xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
		</svg>
	)
}