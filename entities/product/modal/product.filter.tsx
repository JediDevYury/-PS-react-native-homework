import { atom } from "jotai/index";
import { COFFEE_TYPES, FilterState } from "@/entities/product/modal/product.interfaces";
import { listOfCoffee } from "@/entities/product/modal/product.state";

const FILTERS_BY_COFFEE_TYPE: FilterState["byCoffeeType"] = Object.values(COFFEE_TYPES).reduce(
	(acc, type) => ({
		...acc,
		[type]: {
			active: type === COFFEE_TYPES.ALL,
			type,
		},
	}),
	{},
);

const INITIAL_FILTER_STATE: FilterState = {
	byCoffeeType: FILTERS_BY_COFFEE_TYPE,
};

export const filters = atom(INITIAL_FILTER_STATE);

export const activeListOfCoffee = atom((get) => {
	const list = get(listOfCoffee);
	const filter = get(filters).byCoffeeType;

	return list.data?.filter((coffee) => {
		return filter[COFFEE_TYPES.ALL].active || filter[coffee.type].active;
	});
});

export const readWriteFilterByType = atom(
	(get) => Object.values(get(filters).byCoffeeType),
	(get, set, type: string) => {
		const currentFilters = get(filters).byCoffeeType;
		const isDefaultType = type === COFFEE_TYPES.ALL;
		const filter = currentFilters[type];
		const defaultFilter = currentFilters[COFFEE_TYPES.ALL];
		const countActiveTypes = Object.values(currentFilters).filter((filter) => filter.active).length;
		const resetFilters = () => {
			set(filters, {
				byCoffeeType: { ...FILTERS_BY_COFFEE_TYPE },
			});
		};

		if (countActiveTypes === 1 && filter.active && !isDefaultType) {
			resetFilters();

			return;
		}

		if (!isDefaultType) {
			set(filters, {
				byCoffeeType: {
					...currentFilters,
					[type]: {
						...filter,
						active: !filter.active,
					},
					[COFFEE_TYPES.ALL]: {
						...defaultFilter,
						active: false,
					},
				},
			});

			return;
		}

		resetFilters();
	},
);
