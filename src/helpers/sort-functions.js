//newest (number dateAdded), oldest (number dateAdded), alpha A-Z (title), alpha Z-A (title)

export const sortNewestFirst = (a, b) => b.added - a.added;
export const sortOldestFirst = (a, b) => a.added - b.added;
export const sortAlphaDescending = (a, b) => {
	const titleA = a.title.toUpperCase();
	const titleB = b.title.toUpperCase();
	if (titleA < titleB) return -1;
	else if (titleA > titleB) return 1;
	else return 0;
};
export const sortAlphaAscending = (a, b) => {
	const titleA = a.title.toUpperCase();
	const titleB = b.title.toUpperCase();
	if (titleA < titleB) return 1;
	else if (titleA > titleB) return -1;
	else return 0;
};