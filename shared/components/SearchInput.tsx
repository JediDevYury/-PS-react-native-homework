import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, FontFamily, FontSizes, Radius } from "@/shared/tokens";
import SearchIcon from "@/assets/icons/search-icon";

export function SearchInput(props: TextInputProps) {
	return (
		<View>
			<TextInput
				selectionColor={Colors.white}
				style={styles.input}
				placeholderTextColor={Colors.placeholder}
				{...props}
			/>
			<View style={styles.searchIcon}>
				<SearchIcon />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 52,
		backgroundColor: Colors.inputBackground,
		paddingLeft: 48,
		paddingRight: 28,
		borderRadius: Radius.r16,
		fontFamily: FontFamily.Sora,
		fontSize: FontSizes.fs14,
		color: Colors.white,
	},
	searchIcon: {
		position: "absolute",
		top: 16,
		left: 20,
		color: Colors.white,
	},
});
