export const generateUrlWithQueryParams = (url: string, params?: Record<string, any>) => {
	if (!params) {
		return url;
	}

	let newUrl = new URL(url);

	Object.keys((key: string) => {
		newUrl.searchParams.append(key, params[key]);
	});

	return newUrl.toString();
};
