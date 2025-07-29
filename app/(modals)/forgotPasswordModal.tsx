import BackButton from "@/components/BackButton";
import ModalWrapper from "@/components/ModalWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { router } from "expo-router";
import { CaretRightIcon, EnvelopeIcon, PhoneIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const forgotPassword = () => {
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
              Select which contact details should we use to reset your password:
            </Typo>
          </View>
          <View style={{ gap: spacingY._20 }}>
            <View style={styles.nestedContainer}>
              <View style={{ flexDirection: "row", gap: spacingX._10 }}>
                <EnvelopeIcon />
                <Typo
                  size={verticalScale(16)}
                  fontWeight="400"
                  color={colors.text900}
                >
                  Via Email
                </Typo>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/(modals)/emailVerifyModal");
                  }}
                >
                  <CaretRightIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.nestedContainer}>
              <View style={{ flexDirection: "row", gap: spacingX._10 }}>
                <PhoneIcon />
                <Typo
                  size={verticalScale(16)}
                  fontWeight="400"
                  color={colors.text900}
                >
                  Via sms
                </Typo>
              </View>
              <View>
                <TouchableOpacity onPress={() => {}}>
                  <CaretRightIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ModalWrapper>
  );
};

export default forgotPassword;
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
