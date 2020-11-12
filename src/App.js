import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Scoreboard from "./components/scoreboard";

import "./App.css";

export default function App() {
	const [cardArray, setCardArray] = useState([
		{ image: "https://...", name: "Harry Potter", clickedOn: false },
		{ image: "https://...", name: "Hermoine Grainger", clickedOn: false },
		{ image: "https://...", name: "Ron Weasley", clickedOn: false },
		{ image: "https://...", name: "Neville Longbottom", clickedOn: false },
	]);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState();

	useEffect(() => {
		if (!localStorage.getItem("highScore")) {
			setHighScore(0);
		} else {
			setHighScore(JSON.parse(localStorage.getItem("highScore")));
		}
	}, [highScore]);

	function wrapperFunction(index) {
		shuffleIndex(index); //once this is called, shuffleIndex doesn't work... might have to do with the rendering of the component.
		//game();
	}

	function shuffleIndex(index) {
		let newArray = [];
		for (let i = 0; i <= cardArray.length - 1; i++) {
			let newIndex = Math.floor(Math.random() * cardArray.length);
			newArray.splice(newIndex, 0, cardArray[i]);
		}
		markAsClicked(index, newArray);
	}
	function markAsClicked(index, newArray) {
		if (cardArray[index].clickedOn === true) {
			evaluateHighScore();
			setCurrentScore(0);
			resetGame();
		} else {
			cardArray[index].clickedOn = true;
			setCardArray(newArray);
			setCurrentScore(currentScore + 1);
		}
	}
	function evaluateHighScore() {
		console.log();
		if (!localStorage.getItem("highScore") || currentScore > highScore) {
			setHighScore(currentScore);
			localStorage.setItem("highScore", currentScore);
		} else {
			setHighScore(JSON.parse(localStorage.getItem("highscore")));
		}
		setCurrentScore(0);
	}

	function resetGame() {
		setCardArray([
			{ image: "https://...", name: "Harry Potter", clickedOn: false },
			{ image: "https://...", name: "Hermoine Grainger", clickedOn: false },
			{ image: "https://...", name: "Ron Weasley", clickedOn: false },
			{ image: "https://...", name: "Neville Longbottom", clickedOn: false },
		]);
	}

	const memoryCardRendering = cardArray.map((element, index) => (
		<Card
			key={element.name + index}
			index={index}
			info={element}
			onClick={() => wrapperFunction(index)}
		/>
	));

	return (
		<div id="appContainer">
			<Scoreboard currentScore={currentScore} highScore={highScore} />
			{memoryCardRendering}
		</div>
	);
}
