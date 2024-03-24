import { atom } from "jotai/index";
import { COFFEE_TYPES } from "@/entities/product/modal/product.interfaces";
import { productsQueryParams } from "@/entities/product/modal/product.state";

export const INITIAL_FILTERS_BY_TYPE = {
	byProductType: Object.values(COFFEE_TYPES).map((type) => ({
		type,
		active: type === COFFEE_TYPES["ALL"],
	})),
	byText: "",
};

export const productFilter = atom(INITIAL_FILTERS_BY_TYPE);

export const filterByProductType = atom(
	(get) => get(productFilter).byProductType,
	(get, set, type: string) => {
		set(productFilter, {
			...get(productFilter),
			byProductType: [
				...INITIAL_FILTERS_BY_TYPE.byProductType.map((item) => {
					return {
						...item,
						active: item.type === type,
					};
				}),
			],
		});

		set(productsQueryParams, {
			...get(productsQueryParams),
			type: type === COFFEE_TYPES["ALL"] ? "" : type,
		});
	},
);

export const filterByText = atom(
	(get) => get(productFilter).byProductType,
	(get, set, text: string) => {
		set(productFilter, {
			...get(productFilter),
			byText: text,
		});

		set(productsQueryParams, {
			...get(productsQueryParams),
			text,
		});
	},
);
