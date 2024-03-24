import { Params } from "@/entities/product/modal/product.interfaces";

export const generateUrlWithQueryParams = <TParams extends Params>(
	url: string,
	params: TParams | null,
) => {
	if (!params) {
		return url;
	}

	let newUrl = new URL(url);

	Object.keys(params).forEach((key, index) => {
		if (!params[key]) {
			return;
		}

		newUrl.searchParams.append(key, params[key]);
	});

	return newUrl.toString();
};
