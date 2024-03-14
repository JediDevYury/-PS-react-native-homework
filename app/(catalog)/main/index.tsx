import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { Colors, FontFamily, FontSizes } from "@/shared/tokens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main() {
	return (
		<SafeAreaView>
			<Link href={"/(catalog)/main/1"}>
				<Text style={styles.text}>Product</Text>
			</Link>
			<Link href={"/address"}>
				<Text style={styles.text}>Change address</Text>
			</Link>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	text: {
		color: Colors.primary,
		fontSize: FontSizes.fs34,
		textAlign: "center",
		fontFamily: FontFamily.Sora,
	},
});
