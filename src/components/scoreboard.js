export default function Scoreboard(props) {
	return (
		<header className="scoreboard">
			<h1>High Score: {props.highScore}</h1>
			<h1>Current Score: {props.currentScore}</h1>
		</header>
	);
}
