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


function filterWithSearch(bookmarks, {searchTerm, tags}) {
	let searchedWithString = filterWithSearchTerm(bookmarks, searchTerm);
	let searchedWithTags = filterWithTagSearch(searchedWithString, tags);

	return searchedWithTags;
}

function filterWithSearchTerm(bookmarks, searchString = "") {
	searchString = searchString.toLowerCase();

	return bookmarks.filter(bookmark => {
		return bookmark.title.toLowerCase().includes(searchString);
	});
}

function filterWithTagSearch(bookmarks, tags = []) {
	
	if (tags.includes("untagged")) {
		return bookmarks.filter(bm => {
			return bm.tags.length === 0;
		})
	}

	return bookmarks.filter(bm => {
		let lowercaseTags = bm.tags.map(t => t.toLowerCase());
		return tags.every(searchedTag => lowercaseTags.includes(searchedTag));
	})
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