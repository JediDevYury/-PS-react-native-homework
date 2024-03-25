import { SplashScreen, Stack } from "expo-router";
import { Colors } from "@/shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Sora: require("../assets/fonts/sora/Sora-Regular.ttf"),
		SoraSemiBold: require("../assets/fonts/sora/Sora-SemiBold.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					statusBarColor: Colors.black,
					contentStyle: {
						backgroundColor: Colors.white,
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="(catalog)" />
				<Stack.Screen name="address" />
			</Stack>
		</SafeAreaProvider>
	);
}
