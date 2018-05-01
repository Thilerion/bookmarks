import Chance from 'chance'
const chance = Chance();

const categories = [0, 0, 0, 1, 1, 2, 3, 3, 4, 5, null, null];
const catLength = categories.length;

function randomUrl() {
	return chance.url();
}

function generateBookmarks(amount) {
	const bookmarks = [];
	
	for (let i = 0; i < amount; i++) {
		const titleWords = chance.integer({ min: 1, max: 4 });
		const descWords = chance.pickone([2, 5, 6, 7, 8, 9, 15]);
		const bm = {
			title: chance.sentence({words: titleWords}).slice(0,-1),
			url: chance.url(),
			category: chance.pickone(categories),
			id: i + 20,
			added: 1525163723052 - (i * 3600000) ,
			favorite: chance.bool({ likelihood: 15 }),
			description: chance.sentence({ words: descWords })
		}
		if (chance.bool({ likelihood: 40 }) === true) {
			bm.title = `${bm.title} ${chance.capitalize(chance.word())}`;
		}
		if (chance.bool({ likelihood: 70 }) === true) {
			bm.description = "";
		}
		bookmarks.push(bm);
	}
	return bookmarks;
}

export default generateBookmarks;