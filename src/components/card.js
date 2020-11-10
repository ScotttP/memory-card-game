import React, { useState } from "react";
import CardDisplay from "./cardDisplay";
import game from "./game";

export default function Card() {
	const [cardArray, setCardArray] = useState([
		{ image: "https://...", name: "Harry Potter", clickedOn: false },
		{ image: "https://...", name: "Hermoine Grainger", clickedOn: false },
		{ image: "https://...", name: "Ron Weasley", clickedOn: false },
		{ image: "https://...", name: "Neville Longbottom", clickedOn: false },
	]);
	function wrapperFunction(i) {
		shuffleIndex();
		//markAsClicked(i); once this is called, shuffleIndex doesn't work... might have to do with the rendering of the component.
		// game();
	}

	function shuffleIndex() {
		let newArray = [];
		for (let i = 0; i <= cardArray.length - 1; i++) {
			let newIndex = Math.floor(Math.random() * cardArray.length);
			newArray.splice(newIndex, 0, cardArray[i]);
		}
		setCardArray(newArray);
		console.log(cardArray);
	}
	function markAsClicked(index) {
		const copyCardArray = JSON.parse(JSON.stringify(cardArray));
		copyCardArray[index].clickedOn = true;
		setCardArray(copyCardArray);
		if (cardArray[index].clickedOn === true) {
			console.log("this was clicked on already. gameover!");
		}
		// set the score as well
	}
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
