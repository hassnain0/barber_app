import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const phoneVerify = () => {
  //Hooks
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />
        <View
          style={{
            gap: 20,
            marginTop: spacingY._30,
            paddingHorizontal: spacingX._20,
          }}
        >
          <Typo fontWeight={"700"} size={verticalScale(30)}>
            Your phone!
          </Typo>
          <Typo
            size={verticalScale(16)}
            fontWeight={"400"}
            color={colors.textLight}
          >
            A 4 digit security code will be sent via SMS {"\n"} to verify your
            mobile number!
          </Typo>
        </View>
        <View>
          <Input countryCode={true}  />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default phoneVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._20,
  },
});
