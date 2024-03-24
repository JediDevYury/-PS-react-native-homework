import { atom } from "jotai";
import axios, { AxiosError } from "axios";
import { Params, Product, ProductState } from "@/entities/product/modal/product.interfaces";
import { API } from "@/entities/auth/api/api";
import { generateUrlWithQueryParams } from "@/shared/helpers";

const INITIAL_STATE: ProductState = {
	data: null,
	isLoading: false,
	error: null,
};

export const productsQueryParams = atom<Params | null>(null);

export const listOfCoffeeEntity = atom(INITIAL_STATE);

export const listOfCoffee = atom(
	(get) => get(listOfCoffeeEntity),
	async (_, set, params: Params | null) => {
		set(listOfCoffeeEntity, {
			data: null,
			isLoading: true,
			error: null,
		});

		try {
			const { data } = await axios.get<Product[]>(
				generateUrlWithQueryParams(API.getCoffeeList, params),
			);

			set(listOfCoffeeEntity, {
				data,
				isLoading: false,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(listOfCoffeeEntity, {
					data: null,
					isLoading: false,
					error: error,
				});
			}

			throw error;
		}
	},
);
