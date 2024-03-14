import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

export default function OrderLayout() {
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Order",
					headerLeft: () => <Button onPress={() => router.replace("/")} title="Back" />,
				}}
			/>
			<Stack.Screen
				name="success"
				options={{
					title: "Successful order",
				}}
			/>
		</Stack>
	);
}
