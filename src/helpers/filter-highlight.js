function filterHighlightRegEx(str, filterStr) {
	if (filterStr === "" || filterStr == null) return str;
	else {
		//function on escaping regular expression input found on:
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
		let escapedRegExpString = filterStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		let re = new RegExp(escapedRegExpString, "ig");
		let parsedStr = str.replace(re, (matchedText) => {
			return `<span class="highlight">${matchedText}</span>`;
		});
		return parsedStr;
	}
}

export default filterHighlightRegEx;