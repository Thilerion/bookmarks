function filterLinkDomain(url) {
	const host = new URL(url).host;
	if (host.startsWith("www.")) {
		let reHost = host.split(".");
		reHost.shift();
		return reHost.join(".");
	} else {
		return host;
	}
}

export default filterLinkDomain;