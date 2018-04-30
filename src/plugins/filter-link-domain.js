function filterLinkDomain(url) {
	const host = new URL(url).hostname;
	if (host.startsWith("www.")) {
		let reHost = host.split(".");
		reHost.shift();
		return reHost.join(".");
	} else {
		return host;
	}
}

function filterLinkLongDomain(url) {
	const urlObject = new URL(url);
	let host = urlObject.hostname;

	if (host.startsWith("www.")) {
		let reHost = host.split(".");
		reHost.shift();
		host = reHost.join(".");
	}

	let pathName = urlObject.pathname;

	const suffixes = [".html", ".htm", ".jsp", ".jspx", ".xhtml", ".php", ".asp", ".aspx", ".xml"];

	function endsWithAny(str) {
		return suffixes.some(suffix => str.endsWith(suffix));
	}

	if (endsWithAny(pathName)) {
		let rePathName = pathName.split("/");
		rePathName.pop();
		pathName = rePathName.join("/");
	}

	if (pathName.endsWith("/")) {
		pathName = pathName.slice(0, -1);
	}

	return `${host}${pathName}`;
}

export { filterLinkDomain, filterLinkLongDomain };