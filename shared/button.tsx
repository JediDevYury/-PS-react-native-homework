import {Pressable, PressableProps, Text, View, StyleSheet} from "react-native";
import {Colors, Fonts, Radius} from "./tokens";

export const Button = ({text, ...props}: PressableProps & {
  text: string
}) => {

  return (
   <Pressable {...props}>
     <View style={styles.button}>
       <Text style={
         styles.text
       }>{text}</Text>
     </View>
   </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    borderRadius: Radius.r16,
    backgroundColor: Colors.buttonBackground,
    alignItems: "center"
  },
  text: {
    paddingVertical: 21,
    fontFamily: "Sora",
    fontWeight: "600",
    fontStyle: "normal",
    color: Colors.white,
    fontSize: Fonts.f16,
  },
});
