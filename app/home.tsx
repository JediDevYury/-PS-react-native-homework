import {View, StyleSheet, Text, ImageBackground} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Button} from "../shared/button";
import {Colors, Fonts} from "../shared/tokens";

export const Home = () => {
  return (
   <View style={styles.container}>
    <ImageBackground
     style={styles.image}
     source={require("../assets/coffee.png")}
    />
     <LinearGradient
      colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 1)']}
      style={styles.content}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 0.1}}
     >
        <Text style={styles.title}>One of the most delicious coffees in the city!</Text>
        <Text style={styles.description}>Fresh beans, real Arabica and gentle roasting.</Text>
        <Button style={styles.startButton} text={'Start'} />
     </LinearGradient>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    height: "120%",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "flex-end",
    resizeMode: "cover",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingBottom: 34,
  },
  title: {
    fontFamily: "Sora",
    fontSize: 34,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: Fonts.f34,
    letterSpacing: 1,
    textAlign: "center",
    color: Colors.white,
  },
  description: {
    marginTop: 8,
    fontFamily: "Sora",
    fontSize: Fonts.f14,
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: 1,
    textAlign: "center",
    color: Colors.grayLight
  },
  startButton: {
    width: "100%",
  }
});
