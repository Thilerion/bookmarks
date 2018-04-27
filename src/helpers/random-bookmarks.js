import Chance from 'chance'
const chance = Chance();

const categories = [0, 1, 2, 3, 4, 5, null];
const catLength = categories.length;

function randomUrl() {
	return chance.url();
}

function generateBookmarks(amount) {
	const bookmarks = [];
	
	for (let i = 0; i < amount; i++) {
		const titleWords = chance.integer({ min: 1, max: 4 });
		const bm = {
			title: chance.sentence({words: titleWords}).slice(0,-1),
			url: chance.url(),
			category: chance.pickone(categories),
			id: i + 50,
			added: 1527190597705 + i,
			favorite: chance.bool({likelihood: 15})
		}
		if (chance.bool({ likelihood: 40 }) === true) {
			bm.title = `${bm.title} ${chance.capitalize(chance.word())}`;
		}
		bookmarks.push(bm);
	}
	console.log(bookmarks);
	return bookmarks;
}

export default generateBookmarks;