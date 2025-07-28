import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ModalWrapper from "@/components/ModalWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { router } from "expo-router";
import { EnvelopeIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const emailVerify = () => {
  return (
    <ModalWrapper>
      <View style={styles.container}>
        <BackButton />
        <View
          style={{
            gap: 20,
            marginTop: spacingY._30,
            paddingHorizontal: spacingX._20,
          }}
        >
          <Typo fontWeight="700" size={verticalScale(30)}>
            Forgot Password
          </Typo>
          <View>
            <Typo
              size={verticalScale(14)}
              fontWeight="400"
              color={colors.textLight}
            >
              Please enter your email address to reset your password instruction
            </Typo>
          </View>
          <View style={{ gap: spacingY._20 }}>
            <Input placeholder="Email" icon={<EnvelopeIcon />} />
          </View>
          <Button onPress={() => router.push("/(modals)/emailSuccessfulModal")}>
            <Typo
              fontWeight="600"
              size={verticalScale(14)}
              color={colors.white}
              style={{ fontFamily: "Poppins-Regular" }}
            >
              Send Link
            </Typo>
          </Button>
        </View>
      </View>
    </ModalWrapper>
  );
};

export default emailVerify;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._20,
  },
  nestedContainer: {
    flexDirection: "row",
    height: verticalScale(100),
    gap: spacingY._20,
    borderRadius: radius._20,
    justifyContent: "space-between",
    backgroundColor: colors.neutral50,
    alignItems: "center",
    padding: spacingY._20,
  },
});
