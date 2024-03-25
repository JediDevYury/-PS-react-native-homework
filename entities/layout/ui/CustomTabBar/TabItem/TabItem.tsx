import { Text, StyleSheet, View, Pressable } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Colors, FontFamily, FontSizes, Gaps } from "@/shared/tokens";
import TabIndicatorIcon from "@/assets/icons/tab-indicator-icon";

const TabItem = <T extends Record<string, any>>({
	state,
	descriptors,
	navigation,
	route,
	index,
}: Omit<BottomTabBarProps, "insets"> & {
	route: T;
	index: number;
}) => {
	const { options } = descriptors[route.key];
	const label = options.tabBarLabel ?? options.title ?? route.name;
	const isFocused = state.index === index;

	const onPress = () => {
		const event = navigation.emit({
			type: "tabPress",
			target: route.key,
			canPreventDefault: true,
		});

		if (!isFocused && !event.defaultPrevented) {
			navigation.navigate(route.name, route.params);
		}
	};

	const onLongPress = () => {
		navigation.emit({
			type: "tabLongPress",
			target: route.key,
		});
	};

	return (
		<Pressable
			accessibilityRole="button"
			accessibilityState={isFocused ? { selected: true } : {}}
			accessibilityLabel={options.tabBarAccessibilityLabel}
			testID={options.tabBarTestID}
			onPress={onPress}
			onLongPress={onLongPress}
			style={{
				...styles.pressable,
				...(route["name"] !== "main" && {
					borderColor: Colors.separator,
					borderLeftWidth: 1,
				}),
			}}
		>
			<View style={styles.container}>
				<View>
					{options["tabBarIcon"]
						? options["tabBarIcon"]({
								focused: isFocused,
								color: Colors.black,
								size: 24,
							})
						: null}
					{isFocused && <TabIndicatorIcon />}
				</View>
				<Text style={styles.text}>{label}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressable: {
		flex: 1,
	},
	container: {
		height: 46,
		gap: Gaps.g8,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: FontFamily.Sora,
		fontSize: FontSizes.fs14,
		color: Colors.greenDark,
		lineHeight: 24,
	},
});

export default TabItem;
