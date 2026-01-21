import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

export interface LogoProps {
	width?: number;
	link?: boolean;
}

const Logo = (props: LogoProps) => {
	// eslint-disable-next-line prefer-const
	let { width,link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="rounded-full flex m-0 p-0 shadow-lg" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
