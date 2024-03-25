import { Platform, StyleSheet, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Colors, Radius } from "@/shared/tokens";
import TabItem from "./TabItem/TabItem";

export default function CustomTabBar(props: Omit<BottomTabBarProps, "insets">) {
	const routes = props.state.routes;

	return (
		<View
			style={{
				...styles.tabBar,
				...(Platform.OS === "ios" && {
					paddingBottom: 36,
				}),
			}}
		>
			{routes.slice(0, routes.length - 1).map((route, index) => (
				<TabItem key={route.key} route={route} index={index} {...props} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: "row",
		paddingVertical: 16,
		backgroundColor: Colors.white,
		borderRadius: Radius.r24,
		shadowColor: Colors.tabBarShadowColor,
		shadowOffset: {
			width: 0,
			height: -10,
		},
		shadowRadius: 24,
		shadowOpacity: 1,
		borderWidth: 1,
		borderColor: Colors.tabBarBorderColor,
	},
});
