import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { StyleSheet } from "react-native";

const TabIndicatorIcon = () => (
	<Svg width={10} height={5} fill="none" style={styles.indicator}>
		<Rect width={10} height={5} fill="url(#a)" rx={2.5} />
		<Defs>
			<LinearGradient
				id="a"
				x1={6.444}
				x2={1.058}
				y1={-1.269}
				y2={0.619}
				gradientUnits="userSpaceOnUse"
			>
				<Stop stopColor="#C67C4E" />
				<Stop offset={1} stopColor="#EDAB81" />
			</LinearGradient>
		</Defs>
	</Svg>
);

const styles = StyleSheet.create({
	indicator: {
		position: "absolute",
		top: 26,
		alignSelf: "center",
	},
});

export default TabIndicatorIcon;
