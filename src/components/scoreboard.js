import React, { useState } from "react";

export default function Scoreboard(props) {
	return (
		<div>
			<h1>High Score: {props.score.highScore}</h1>
			<h1>Current Score: {props.score.currentScore}</h1>
		</div>
	);
}
