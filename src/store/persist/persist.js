function retrieve(item) {
	let retrieved = localStorage.getItem(item);
	if (retrieved === null) {
		console.warn("No local storage for item " + item + " was found.");
		return null;
	} else {
		retrieved = JSON.parse(retrieved);
		console.log("Retrieved " + item + " from local storage.");
		return retrieved;
	}
}

function save(item, data) {
	if (item == null) console.warn("Cannot save to local storage: wrong item name.");

	let toSave = JSON.stringify(data);
	localStorage.setItem(item, toSave);
	console.log("Saved " + item + " to local storage.");
}

export { save, retrieve };