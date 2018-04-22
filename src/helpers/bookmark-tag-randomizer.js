const randomTags = (possibleTags = 6) => {
	
	let tagsAmount = null;

	if (Math.random() < 0.3) {
		//increases the chance of only getting ONE tag
		tagsAmount = 1;
	} else if (Math.random() < 0.1) {
		//small chance of getting ZERO tags
		tagsAmount = 0;
	} else {
		tagsAmount = randomNumber(1, Math.min(possibleTags - 1, 4));
	}
	console.log(tagsAmount);

	const allTags = [...Array(possibleTags).keys()];

	let chosenArray = [];

	for (let i = 0; i < tagsAmount; i++) {
		let rndIndex = randomNumber(0, allTags.length - 1);
		chosenArray.push(allTags.splice(rndIndex, 1)[0]);
	}

	return chosenArray;
}

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}