import { StyleSheet, FlatList, View } from "react-native";
import { Colors, Gaps } from "@/shared/tokens";
import FilterByCoffeeTypeItem from "@/widgets/product/ui/FilterByCoffeeTypeItem";
import { useAtom } from "jotai";
import { filterByProductType } from "@/entities/product/modal/product.filter";

const FilterByCoffeeType = () => {
	const [filter, setFilter] = useAtom(filterByProductType);

	const handleFilter = (type: string) => {
		setFilter(type);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={filter}
				renderItem={({ item: { type, active } }) => {
					return <FilterByCoffeeTypeItem setFilter={handleFilter} type={type} active={active} />;
				}}
				contentContainerStyle={styles.contentContainerStyle}
				horizontal={true}
				scrollEnabled
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		height: 38,
	},
	contentContainerStyle: {
		paddingHorizontal: 30,
		gap: Gaps.g8,
		backgroundColor: Colors.background,
	},
});

export default FilterByCoffeeType;
