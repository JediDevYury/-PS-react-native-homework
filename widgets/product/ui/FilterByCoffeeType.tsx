import { StyleSheet, FlatList } from "react-native";
import { Colors, Gaps } from "@/shared/tokens";
import { readWriteFilterByType } from "@/entities/product/modal/product.filter";
import { useAtom } from "jotai";
import FilterByCoffeeTypeItem from "@/widgets/product/ui/FilterByCoffeeTypeItem";

const FilterByCoffeeType = () => {
	const [data, addFilter] = useAtom(readWriteFilterByType);

	return (
		<FlatList
			data={data}
			renderItem={({ item: { type, active } }) => {
				return <FilterByCoffeeTypeItem addFilter={addFilter} type={type} active={active} />;
			}}
			contentContainerStyle={styles.listContainer}
			horizontal={true}
			scrollEnabled
			showsHorizontalScrollIndicator={false}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		paddingHorizontal: 30,
		marginTop: 16,
		gap: Gaps.g8,
		height: 38,
		backgroundColor: Colors.background,
	},
});

export default FilterByCoffeeType;
