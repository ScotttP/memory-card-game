import React from "react";

export default function CardDisplay(props) {
	return (
		<div onClick={props.onClick}>
			<h1>{props.info.name}</h1>
		</div>
	);
}
