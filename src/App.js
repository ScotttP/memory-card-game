import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Scoreboard from "./components/scoreboard";

import "./App.css";
import cardArrayData from "./components/cardArray";

export default function App() {
	const shuffleArray = (array) => {
		let newArray = JSON.parse(JSON.stringify(array));
		for (let i = newArray.length - 1; i > 0; i--) {
			let newIndex = Math.floor(Math.random() * (i + 1));
			let tempArray = newArray[i];
			newArray[i] = newArray[newIndex];
			newArray[newIndex] = tempArray;
		}
		return newArray;
	};

	const [cardArray, setCardArray] = useState(() => shuffleArray(cardArrayData));
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState();

	// useEffect(() => {
	// 	if (!localStorage.getItem("highScore")) {
	// 		setHighScore(0);
	// 	} else {
	// 		setHighScore(JSON.parse(localStorage.getItem("highScore")));
	// 	}
	// }, [highScore]);

	useEffect(() => {
		console.log("clicked");
	});

	function markAsClicked(e) {
		// if (e.clickedOn) {
		// 	evaluateHighScore();
		// 	setCurrentScore(0);
		// 	setCardArray(cardArrayData);
		// } else {
		// 	cardArrayCopy[index].clickedOn = true;
		// 	shuffleArray(cardArrayCopy);
		// 	setCurrentScore(currentScore + 1);
		// }
	}

	function evaluateHighScore() {
		if (!localStorage.getItem("highScore") || currentScore > highScore) {
			setHighScore(currentScore);
			localStorage.setItem("highScore", currentScore);
		}
		setCurrentScore(0);
	}

	const memoryCardRendering = cardArray.map((element, index) => (
		<Card
			key={element.name + index}
			index={index}
			info={element}
			onClick={() => markAsClicked()}
		/>
	));

	return (
		<div id="appContainer">
			<Scoreboard currentScore={currentScore} highScore={highScore} />
			{memoryCardRendering}
		</div>
	);
}
