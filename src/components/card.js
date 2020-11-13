import React from "react";

export default function Card(props) {
	return (
		<div className="cards" onClick={props.onClick}>
			<img
				className="characterImage"
				src={props.info.image}
				alt={props.info.name}
			></img>
			<p className="nameHeading">{props.info.name}</p>
		</div>
	);
}
