import React from "react";

import { Text, View, StyleSheet, Image, Pressable, ImageBackground } from "react-native";
import AddProductIcon from "@/assets/icons/add-product-icon";
import { Colors, FontFamily, FontSizes, Gaps, Radius } from "@/shared/tokens";
import { Product } from "@/entities/product/modal/product.interfaces";
import StarIcon from "@/assets/icons/stat-icon";

type ProductProps = { item: Product };

const ProductItem = ({ item }: ProductProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageBox}>
				<View style={styles.rating}>
					<StarIcon />
					<Text style={styles.ratingText}>{item.rating}</Text>
				</View>
				<View style={styles.label} />
				<ImageBackground
					style={styles.image}
					source={{
						uri: item.image,
					}}
				/>
			</View>
			<View style={styles.content}>
				<Text style={styles.title}>{item.name}</Text>
				<Text style={styles.subtitle}>{item.subTitle}</Text>
				<View style={styles.priceBox}>
					<Text style={styles.price}>{item.price}$</Text>
					<Pressable>
						<AddProductIcon />
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 4,
		backgroundColor: Colors.white,
		borderRadius: Radius.r16,
		gap: Gaps.g12,
	},
	label: {
		position: "absolute",
		top: 0,
		left: 0,
		width: 52,
		height: 26,
		backgroundColor: Colors.black,
		opacity: 0.16,
		borderTopLeftRadius: Radius.r16,
		borderBottomRightRadius: Radius.r16,
		zIndex: 100,
	},
	rating: {
		position: "absolute",
		zIndex: 200,
		top: 2,
		left: 8,
		flexDirection: "row",
		gap: Gaps.g2,
		alignItems: "center",
	},
	ratingText: {
		color: Colors.white,
		fontFamily: FontFamily.SoraSemiBold,
		lineHeight: 20,
		fontSize: FontSizes.fs10,
	},
	imageBox: {
		alignItems: "center",
		width: 142,
		maxHeight: 132,
		borderRadius: Radius.r16,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	content: {
		paddingHorizontal: 12,
		gap: Gaps.g4,
		paddingBottom: 8,
	},
	title: {
		fontFamily: FontFamily.SoraSemiBold,
		fontSize: FontSizes.fs16,
		lineHeight: 24,
		color: Colors.blackLight,
	},
	subtitle: {
		fontFamily: FontFamily.Sora,
		fontSize: FontSizes.fs12,
		lineHeight: 12,
		color: Colors.textGray,
	},
	priceBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	price: {
		fontFamily: FontFamily.SoraSemiBold,
		fontSize: FontSizes.fs18,
		lineHeight: 24,
		color: Colors.greenDark,
	},
});

export default ProductItem;
