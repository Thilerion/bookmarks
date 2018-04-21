function filterHighlight(str, filterStr) {
	if (filterStr === "" || filterStr == null) return str;
	else {
		let parsedFilterStr = encodeURIComponent(filterStr);
		let re = new RegExp(parsedFilterStr, "ig");
		let parsedStr = str.replace(re, (matchedText) => {
			return `<span class="highlight">${matchedText}</span>`;
		});
		return decodeURIComponent(parsedStr);
	}
}

export default filterHighlight;