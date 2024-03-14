import { View, StyleSheet, Text, ImageBackground, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useEffect, useRef} from 'react';
import { Link } from "expo-router";
import {Colors, FontFamily, FontSizes} from "@/shared/tokens";
import Button from "@/shared/components/Button";

export default function Home () {
  const opacityAnim = useRef(new Animated.Value(-100)).current;
  const opacity = opacityAnim.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 1],
  });

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
   <View style={styles.container}>
     <ImageBackground style={styles.image} source={require('../assets/coffee.png')} />
     <LinearGradient
      colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 1)']}
      style={styles.content}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.1 }}
     >
       <Animated.Text
        style={{
          ...styles.title,
          transform: [{ translateY: opacityAnim }],
          opacity,
        }}
       >
         One of the most delicious coffees in the city!
       </Animated.Text>
       <Text style={styles.description}>Fresh beans, real Arabica and gentle roasting.</Text>
       <Link href={"/(catalog)"} asChild>
         <Button text={'Start'} />
       </Link>
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
    height: '120%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    resizeMode: 'cover',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 34,
  },
  title: {
    fontFamily: FontFamily.SoraSemiBold,
    fontSize: 34,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.white,
  },
  description: {
    marginTop: 8,
    fontFamily: FontFamily.Sora,
    fontSize: FontSizes.fs16,
    textAlign: 'center',
    color: Colors.grayLight,
  }
});
