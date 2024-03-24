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

export interface Params {
	[key: string]: string;
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
