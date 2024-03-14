import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

export default function MainLayout() {
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Main",
					headerLeft: () => <Button onPress={() => router.replace("/")} title="Back" />,
				}}
			/>
		</Stack>
	);
}
