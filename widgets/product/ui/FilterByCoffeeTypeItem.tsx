import React from "react";

import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors, FontFamily, FontSizes, Radius } from "@/shared/tokens";

type FilterByCoffeeTypeItemProps = {
	type: string;
	active: boolean;
	addFilter: (type: string) => void;
};

const FilterByCoffeeTypeItem = ({ type, active, addFilter }: FilterByCoffeeTypeItemProps) => {
	return (
		<Pressable
			onPress={() => {
				addFilter(type);
			}}
		>
			{() => {
				return (
					<View
						style={{
							...styles.container,
							backgroundColor: active ? Colors.primary : Colors.white,
						}}
					>
						<Text
							style={{
								...styles.button,
								...(active && styles.buttonActive),
							}}
						>
							{type}
						</Text>
					</View>
				);
			}}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: Radius.r12,
	},
	button: {
		fontFamily: FontFamily.Sora,
		color: Colors.greenDark,
		fontSize: FontSizes.fs14,
		paddingHorizontal: 16,
		paddingVertical: 10,
		lineHeight: 18,
	},
	buttonActive: {
		fontFamily: FontFamily.SoraSemiBold,
		fontSize: FontSizes.fs14,
		color: Colors.white,
	},
});

export default FilterByCoffeeTypeItem;
