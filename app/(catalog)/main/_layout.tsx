import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";
import { useCallback } from "react";

export default function MainLayout() {
	const router = useRouter();

	const handleBack = useCallback(() => {
		router.replace("/");
	}, [router]);

	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Main",
					headerLeft: () => <Button onPress={handleBack} title="Back" />,
				}}
			/>
		</Stack>
	);
}
