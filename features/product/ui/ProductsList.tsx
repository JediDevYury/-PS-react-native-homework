import { Text, View, StyleSheet, FlatList } from "react-native";
import { Colors, Gaps } from "@/shared/tokens";
import { useAtom } from "jotai/index";
import { activeListOfCoffee } from "@/entities/product/modal/product.filter";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductItem from "@/features/product/ui/ProductItem";

const ProductsList = () => {
	const [products] = useAtom(activeListOfCoffee);

	if (!products) {
		return (
			<SafeAreaView>
				<Text>List of coffee is empty</Text>
			</SafeAreaView>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductItem item={item} />}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					width: "100%",
					gap: Gaps.g16,
				}}
				columnWrapperStyle={{
					justifyContent: "space-between",
					width: "100%",
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 24,
		paddingHorizontal: 30,
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
	text: {
		height: 120,
		color: Colors.black,
	},
});

export default ProductsList;
