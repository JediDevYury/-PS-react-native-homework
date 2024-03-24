import { Text, StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import { Colors, FontFamily, FontSizes, Gaps } from "@/shared/tokens";
import { useAtom, useAtomValue } from "jotai/index";
import ProductItem from "@/features/product/ui/ProductItem";
import { listOfCoffee, productsQueryParams } from "@/entities/product/modal/product.state";
import { useEffect } from "react";

const ProductsList = () => {
	const queryParams = useAtomValue(productsQueryParams);
	const [entity, fetchListOfCoffee] = useAtom(listOfCoffee);
	const { data: products, isLoading } = entity;

	useEffect(() => {
		fetchListOfCoffee(queryParams);
	}, [queryParams]);

	if (isLoading) {
		return (
			<ActivityIndicator
				size="large"
				style={{
					height: "60%",
				}}
			/>
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
				ListEmptyComponent={<Text style={styles.text}>No products found</Text>}
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
	},
	text: {
		fontFamily: FontFamily.Sora,
		fontSize: FontSizes.fs16,
		lineHeight: 24,
		color: Colors.black,
	},
});

export default ProductsList;
