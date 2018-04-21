function returnVal(valid = false, message = "", result) {
	return {
		valid: valid,
		message: message,
		result: result
	}
}

const validateUrl = urlString => {
	if (urlString == null) {
		return returnVal(false, "No url was entered.", urlString);
	} else if (urlString.length < 2) {
		return returnVal(false, "URL was too short.", urlString);
	}

	let message = "";

	if (!urlString.startsWith("https://") || !urlString.startsWith("http://")) {
		urlString = "http://" + urlString;
		message = "Prepended with http://";
	} else {
		message = "URL was valid";
	}

	try {
		let urlObj = new URL(urlString);
		return returnVal(true, message, urlObj);
	} catch(err) {
		console.warn(err);
		return returnVal(false, "String could not be converted to a URL for some reason.", urlString);
	}
}

const validateHexColour = hexString => {
	hexString = String(hexString);
	
	let message = "";
	
	if (!hexString.startsWith("#")) {
		debugger;
		hexString = "#" + hexString;
		message = "Prepended code with '#'.";
	}
	
	let valid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexString);

	if (valid === true) {
		if (message === "") message = "Hex colour was valid.";
		return returnVal(valid, message, hexString);
	} else {
		return returnVal(false, "Hex colour was invalid.", hexString);
	}
}

const validateString = (toValidate, minLength = 1, maxLength = 40) => {
	if (typeof toValidate === 'boolean') {
		return returnVal(false, "Input is a boolean.", toValidate);
	} else if (typeof toValidate === 'object') {
		return returnVal(false, "Input is an object (or array).", toValidate);
	}
	
	let str = String(toValidate);

	if (str.length < minLength) {
		return returnVal(false, `Input was too short. Minimum length is ${minLength}, while input length was ${str.length}.`, str);
	} else if (str.length > maxLength) {
		return returnVal(false, `Input was too long. Maximum length is ${maxLength}, while input length was ${str.length}.`, str);
	} else {
		return returnVal(true, "Input string is valid.", str)
	}
}

const validateUniqueStringInArray = (str, arr = []) => {
	if (arr.includes(str)) {
		return returnVal(false, "Input is not unique.", str);
	} else {
		return returnVal(true, "Input is unique.", str);
	}
}


export { validateUrl, validateHexColour, validateString, validateUniqueStringInArray };