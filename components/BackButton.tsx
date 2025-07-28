import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BackButtonProps } from "@/types";
import { useRouter } from "expo-router";
import { ArrowArcLeftIcon, ArrowLeftIcon, CaretLeftIcon } from "phosphor-react-native";
import { verticalScale } from "../utils/styling";
import { colors, radius } from "@/constants/theme";

const BackButton = ({ style, iconSize=25 }: BackButtonProps) => {
  const router = useRouter();
 
  //Press Function
  const handlePress = () => {
    router.back();
  };
  return (
    <TouchableOpacity onPress={handlePress} style={[style, styles.button]}>
      <ArrowLeftIcon
       
        size={verticalScale(iconSize)}
        color={colors.black}
        weight="bold"
      ></ArrowLeftIcon>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf:'flex-start',
    borderRadius:radius._12,
    borderCurve:'continuous',
    padding:5,
  },
});
