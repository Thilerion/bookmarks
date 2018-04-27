import defaultData from './default-data';

const TEST_MODE = true;

function retrieve(item) {
	if (TEST_MODE === true) return null;

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
	if (TEST_MODE === true) return;

	if (item == null) console.warn("Cannot save to local storage: wrong item name.");

	let toSave = JSON.stringify(data);
	localStorage.setItem(item, toSave);
	console.log("Saved " + item + " to local storage.");
}

function initialize(...items) {
	return new Promise((resolve, reject) => {
		let retrievedItems = {};
		if (TEST_MODE === true) {
			for (let item of items) {
				console.log(item);
				retrievedItems[item] = defaultData[item];
			}
		}
		resolve(retrievedItems);
	})
}

export { initialize, save, retrieve };