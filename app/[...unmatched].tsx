import {View, Text, StyleSheet, Image} from "react-native";
import {Colors, FontSizes, Gaps} from "@/shared/tokens";
import {SafeAreaView} from "react-native-safe-area-context";
import {CustomLink} from "@/shared/components/CustomLink";

export default function UnmatchedRoute () {
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.content}>
       <Image
        style={styles.image}
        source={require('../assets/images/unmatched.png')}
        resizeMode="contain"
       />
       <Text style={styles.text}>
         Oooh... something went wrong. Try returning to the main application screen.
       </Text>
       <CustomLink href={'/'} text="To home screen" />
     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  image: {
    width: 204,
    height: 282,
  },
  text: {
    color: Colors.white,
    fontSize: FontSizes.fs16,
    textAlign: 'center',
    fontFamily: "Sora",
  },
});
