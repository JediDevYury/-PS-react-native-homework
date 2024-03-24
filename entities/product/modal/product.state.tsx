import { atom } from "jotai";
import axios, { AxiosError } from "axios";
import { Product, ProductState } from "@/entities/product/modal/product.interfaces";
import { API } from "@/entities/auth/api/api";
import { generateUrlWithQueryParams } from "@/shared/helpers";

const INITIAL_STATE: ProductState = {
	data: null,
	isLoading: false,
	error: null,
};

export const listOfCoffee = atom(INITIAL_STATE);

export const readWriteListOfCoffee = atom(
	(get) => get(listOfCoffee),
	async (get, set, params?) => {
		set(listOfCoffee, {
			data: null,
			isLoading: true,
			error: null,
		});

		try {
			const { data } = await axios.get<Product[]>(generateUrlWithQueryParams(API.getCoffeeList));

			set(listOfCoffee, {
				data,
				isLoading: false,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(listOfCoffee, {
					data: null,
					isLoading: false,
					error: error,
				});
			}

			throw error;
		}
	},
);
