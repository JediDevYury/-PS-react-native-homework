import React from "react";
import {
	Pressable,
	Text,
	StyleSheet,
	GestureResponderEvent,
	Animated,
	View,
	ActivityIndicator,
} from "react-native";
import { Colors, FontFamily, FontSizes, Radius } from "../tokens";
import { useRef } from "react";
import { forwardRef } from "react";

type ButtonProps = {
	text: string;
	isLoading: boolean;
	style?: object;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
	({ text, isLoading = false, style, ...props }, ref) => {
		const fadeAnim = useRef(new Animated.Value(0)).current;

		const backgroundColor = fadeAnim.interpolate({
			inputRange: [0, 100],
			outputRange: [Colors.primary, Colors.primaryLight],
		});

		const fadeOut = (e: GestureResponderEvent) => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
			props.onPressIn && props.onPressIn(e);
		};

		const fadeIn = (e: GestureResponderEvent) => {
			Animated.timing(fadeAnim, {
				toValue: 100,
				duration: 300,
				useNativeDriver: true,
			}).start();
			props.onPressOut && props.onPressOut(e);
		};

		return (
			<Pressable
				style={styles.pressable}
				ref={ref}
				{...props}
				onPressIn={fadeIn}
				onPressOut={fadeOut}
			>
				<Animated.View
					style={{
						...styles.button,
						backgroundColor,
						...style,
					}}
				>
					{isLoading && <ActivityIndicator size="large" color={Colors.white} />}
					{!isLoading && <Text style={styles.text}>{text}</Text>}
				</Animated.View>
			</Pressable>
		);
	},
);

const styles = StyleSheet.create({
	pressable: {
		width: "100%",
	},
	container: {
		width: "100%",
	},
	button: {
		borderRadius: Radius.r16,
		backgroundColor: Colors.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: FontFamily.SoraSemiBold,
		color: Colors.white,
		fontSize: FontSizes.fs16,
	},
});

export default Button;
