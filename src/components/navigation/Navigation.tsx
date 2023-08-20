import React from "react";
import { Menu } from './../menu/Menu';

let navData = ['Projects', 'Technologies', 'About me']

export const Navigation = () => {
	return (
		<nav>
			<Menu menuData={navData} />
		</nav>
	)
}
