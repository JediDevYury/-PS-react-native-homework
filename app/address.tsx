import { Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Colors, FontFamily, FontSizes } from "@/shared/tokens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChangeAddressPage() {
	return (
		<SafeAreaView>
			<Link href={"/(catalog)"}>
				<Text style={styles.text}>Change address</Text>
			</Link>
		</SafeAreaView>
	);
}

export const styles = StyleSheet.create({
	text: {
		color: Colors.primary,
		fontSize: FontSizes.fs34,
		textAlign: "center",
		fontFamily: FontFamily.Sora,
	},
});
