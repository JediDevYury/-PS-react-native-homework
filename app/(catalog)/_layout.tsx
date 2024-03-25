import { Tabs } from "expo-router";
import CustomTabBar from "@/entities/layout/ui/CustomTabBar/CustomTabBar";
import HomeIcon from "@/assets/icons/home-icon";
import OrderIcon from "@/assets/icons/order-icon";
import { Colors } from "@/shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CatalogLayout() {
	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Tabs
				tabBar={(props) => <CustomTabBar {...props} />}
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: Colors.white,
					},
				}}
			>
				<Tabs.Screen
					name="main"
					options={{
						headerShown: false,
						title: "Main",
						tabBarIcon: (props) => <HomeIcon focused={props.focused} />,
					}}
				/>
				<Tabs.Screen
					name="order"
					options={{
						title: "Order",
						tabBarIcon: (props) => <OrderIcon focused={props.focused} />,
					}}
				/>
			</Tabs>
		</SafeAreaProvider>
	);
}
