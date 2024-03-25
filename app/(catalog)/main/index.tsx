import { StyleSheet, View } from "react-native";
import FilterByCoffeeType from "@/widgets/product/ui/FilterByCoffeeType";
import { Colors } from "@/shared/tokens";
import ProductsList from "@/features/product/ui/ProductsList";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/widgets/product/ui/Search";
import { useEffect } from "react";
import { useResetAtom } from "jotai/utils";
import { productFilter } from "@/entities/product/modal/product.filter";

export default function Main() {
	const resetProducts = useResetAtom(productFilter);

	useEffect(() => {
		return () => {
			resetProducts();
		};
	}, []);

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.header}>
				<Search />
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
