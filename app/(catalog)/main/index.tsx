import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import FilterByCoffeeType from "@/widgets/product/ui/FilterByCoffeeType";
import { Colors } from "@/shared/tokens";
import { SearchInput } from "@/shared/components/SearchInput";
import ProductsList from "@/features/product/ui/ProductsList";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAtom } from "jotai";
import { readWriteListOfCoffee } from "@/entities/product/modal/product.state";

export default function Main() {
	const [state, fetchListOfCoffee] = useAtom(readWriteListOfCoffee);
	const { isLoading } = state;

	useEffect(() => {
		fetchListOfCoffee();
	}, []);

	if (isLoading) return <ActivityIndicator />;

	if (state.error) {
		return (
			<SafeAreaView>
				<Text>Failed to fetch coffee list</Text>
			</SafeAreaView>
		);
	}

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.header}>
				<SearchInput placeholder="Search coffee" />
			</SafeAreaView>
			<View style={styles.content}>
				<FilterByCoffeeType />
				<ProductsList />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black,
	},
	header: {
		paddingHorizontal: 30,
		paddingVertical: 34,
		height: 214,
	},
	content: {
		flex: 1,
		height: "100%",
		alignItems: "center",
		backgroundColor: Colors.background,
	},
});
