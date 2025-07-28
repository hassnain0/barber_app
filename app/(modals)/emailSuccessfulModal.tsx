import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { router } from "expo-router";
import { EnvelopeIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const emailSuccessfulModal = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <EnvelopeIcon size={verticalScale(100)} />
        <View style={{ marginTop: spacingY._20 }}>
          <Typo fontWeight={"700"} size={verticalScale(30)}>
            Code has been sent
          </Typo>
        </View>
        <View style={{ marginTop: spacingY._20 }}>
          <Typo
            style={{ textAlign: "center" }}
            size={verticalScale(14)}
            fontWeight={"400"}
          >
            You’ll shortly receive an email with a {"\n"} code to setup a new
            password.
          </Typo>
        </View>
        <View style={{ marginTop: spacingY._30 }}>
          <Button
            style={{ width: 173, height: 58 }}
            onPress={() => router.push("/(modals)/resetPasswordModal")}
          >
            <Typo
              fontWeight="600"
              size={14}
              color={colors.white}
              style={{ fontFamily: "Poppins-Regular" }}
            >
              Done
            </Typo>
          </Button>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default emailSuccessfulModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacingY._50,
  },
});
