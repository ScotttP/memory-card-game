import React, { useState } from "react";

export default function Card() {
	const [cardArray, setCardArray] = useState([
		{ image: "https://...", name: "Harry Potter", clickedOn: false },
		{ image: "https://...", name: "Hermoine Grainger", clickedOn: false },
		{ image: "https://...", name: "Ron Weasley", clickedOn: false },
		{ image: "https://...", name: "Neville Longbottom", clickedOn: false },
	]);

	function shuffleIndex() {
		let newArray = [];
		for (let i = 0; i <= cardArray.length - 1; i++) {
			let newIndex = Math.floor(Math.random() * cardArray.length);
			newArray.splice(newIndex, 0, cardArray[i]);
		}
		setCardArray(newArray);
		console.log(cardArray);
	}

	return (
		<div>
			<h1>MEMORY CARD</h1>
			<button onClick={shuffleIndex}>shuffle</button>
		</div>
	);
}
