const sortNewestFirst = (a, b) => b.added - a.added;
const sortOldestFirst = (a, b) => a.added - b.added;
const sortAlphaDescending = (a, b) => {
	const titleA = a.title.toUpperCase();
	const titleB = b.title.toUpperCase();
	if (titleA < titleB) return -1;
	else if (titleA > titleB) return 1;
	else return 0;
};
const sortAlphaAscending = (a, b) => {
	const titleA = a.title.toUpperCase();
	const titleB = b.title.toUpperCase();
	if (titleA < titleB) return 1;
	else if (titleA > titleB) return -1;
	else return 0;
};

const SORT_MODES = ["Newest", "Oldest", "Alphabetical (A-Z)", "Alphabetical (Z-A)"];

const SORT_MODE_FUNCTIONS = [sortNewestFirst, sortOldestFirst, sortAlphaAscending, sortAlphaDescending];

function sortBookmarks(bookmarks, sortModeId) {
	return [...bookmarks].sort(SORT_MODE_FUNCTIONS[sortModeId]);
}

export { SORT_MODES, sortBookmarks };