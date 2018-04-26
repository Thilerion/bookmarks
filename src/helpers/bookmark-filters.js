function _hasCategory(category) {
	return function (bookmark) {
		return bookmark.category === category;
	}
}

function _isFavorite(bookmark) {
	return bookmark.favorite === true;
}

function _isUncategorized(bookmark) {
	return bookmark.category === null;
}


function filterWithSearch(bookmarks, searchString) {
	searchString = searchString.toLowerCase();

	return bookmarks.filter(bookmark => {
		return bookmark.title.toLowerCase().includes(searchString);
	});
}

function filterWithCategory(bookmarks, categoryId, bookmarkGroup) {
	if (bookmarkGroup === "All") return bookmarks;
	else if (bookmarkGroup === "Favorites") {
		return bookmarks.filter(_isFavorite);
	} else if (bookmarkGroup === "Uncategorized") {
		return bookmarks.filter(_isUncategorized);
	} else {
		return bookmarks.filter(_hasCategory(categoryId));
	}
}

export { filterWithSearch, filterWithCategory }