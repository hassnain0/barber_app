import { colors, radius, spacingX } from "@/constants/theme";
import { InputProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import { SlidersHorizontalIcon } from "phosphor-react-native";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PhoneInput from "react-native-international-phone-number";

const Input = (props: InputProps) => {
  const iconWithStyle = props.icon
    ? React.cloneElement(props.icon, {
        style: styles.iconStyle, // merge internal + external styles
      })
    : null;

  //States
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");

  //Functions
  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
  };
  const handleInputValue = (value) => {
    setInputValue(value);
    if (props.onChangeText) {
      props.onChangeText(value);
    }
  };
  return (
    <View style={[styles.container, props.containerStyle]}>
      {iconWithStyle}
      {props.countryCode && (
        <PhoneInput
          style={[
            styles.inputStyle,
            props.inputStyle,
            { borderWidth: 0, alignItems: "center", justifyContent: "center" },
          ]}
          value={inputValue}
          onChangePhoneNumber={handleInputValue}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
        />
      )}
      <TextInput
             style={[styles.inputStyle, props.inputStyle]}
        placeholderTextColor={colors.neutral400}
        
             onChangeText={props.onChangeText}
             placeholder={props.placeholder}
             value={inputValue}
             ref={props.inputRef}
/>
      {props.filter && (
        <View  style={{ paddingRight: spacingX._10 }}>
      <SlidersHorizontalIcon/>
          </View>
      )}
      
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: verticalScale(60),
    alignItems: "center",
    backgroundColor: colors.neutral50,
    justifyContent: "center",
    borderColor: colors.neutral300,
    borderRadius: radius._17,
    borderCurve: "continuous",
    gap: spacingX._20,
    marginTop: spacingX._10,
  },
  inputStyle: {
    flex: 1,
    color: colors.white,
    fontSize: verticalScale(14),
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: "#888",
    marginLeft: spacingX._5,
  },
});
