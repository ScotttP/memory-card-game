export default function Scoreboard(props) {
	return (
		<div>
			<h1>High Score: {props.highScore}</h1>
			<h1>Current Score: {props.currentScore}</h1>
		</div>
	);
}
