export default function Scoreboard(props) {
	return (
		<header className="scoreboard">
			<img
				id="memoryCardFont"
				src="https://fontmeme.com/permalink/201113/348a818b58206d7bcc3eba27604c570b.png"
			></img>
			<div id="scoreContainer">
				<h1>High Score: {props.highScore}</h1>
				<h1>Current Score: {props.currentScore}</h1>
			</div>
		</header>
	);
}
