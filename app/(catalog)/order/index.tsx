import { Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Colors, FontFamily, FontSizes } from "@/shared/tokens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Order() {
	return (
		<SafeAreaView>
			<Link href={"/(catalog)"}>
				<Text style={styles.text}>Main</Text>
			</Link>
			<Link href={"/address"}>
				<Text style={styles.text}>Change address</Text>
			</Link>
			<Link href={"/(catalog)/order/success"}>
				<Text style={styles.text}>Order</Text>
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
