import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { EnvelopeIcon, LockIcon, UserIcon } from "phosphor-react-native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const index = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  
  const router=useRouter();
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

 
  return (
    <View style={styles.container}>
   <Button onPress={()=>router.navigate('/(auth)/login')} ><Typo>Hello</Typo></Button>
   </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._20,
  },
  textContainer: {
    paddingVertical: spacingY._20,
    alignItems: "center",
  },
  textRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  footerTextContainer:{
    paddingVertical: spacingY._30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    bottom:0,
  }
});
