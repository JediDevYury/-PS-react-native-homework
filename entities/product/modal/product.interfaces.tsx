import { AxiosError } from "axios";

export interface Product {
	id: number;
	name: string;
	subTitle: string;
	type: string;
	price: number;
	image: string;
	description: string;
	rating: number;
}

export interface Filter {
	[key: string]: {
		active: boolean;
		type: string;
	};
}

export enum COFFEE_TYPES {
	ALL = "all",
	CAPPUCCINO = "cappuccino",
	LATTE = "latte",
	MACCHIATO = "macchiato",
	AMERICANO = "americano",
}

export interface ProductState {
	data: Product[] | null;
	isLoading: boolean;
	error: AxiosError | null;
}

export type FilterState = {
	byCoffeeType: Filter;
};
