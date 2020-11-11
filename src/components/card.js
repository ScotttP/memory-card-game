import React, { useState, useEffect } from "react";
import CardDisplay from "./cardDisplay";
import game from "./game";

export default function Card() {
	const [cardArray, setCardArray] = useState([
		{ image: "https://...", name: "Harry Potter", clickedOn: false },
		{ image: "https://...", name: "Hermoine Grainger", clickedOn: false },
		{ image: "https://...", name: "Ron Weasley", clickedOn: false },
		{ image: "https://...", name: "Neville Longbottom", clickedOn: false },
	]);
	const [score, setScore] = useState({
		currentScore: 0,
		highScore: 0,
	});

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
			console.log("setBestScore");
			console.log("resetGame");
		}
		cardArray[index].clickedOn = true;
		setCardArray(newArray);
	}
	useEffect(() => {
		console.log("useEffect");
	});

	const memoryCardRendering = cardArray.map((element, index) => (
		<CardDisplay
			key={element.name + index}
			index={index}
			info={element}
			onClick={() => wrapperFunction(index)}
		/>
	));

	return <div>{memoryCardRendering}</div>;
}
