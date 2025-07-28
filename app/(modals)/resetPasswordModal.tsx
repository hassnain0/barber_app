import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import { LockIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const resetPassword = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View
          style={{ paddingTop: spacingY._50, paddingHorizontal: spacingX._20 }}
        >
          <Typo
            fontWeight={"800"}
            size={30}
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Reset Password
          </Typo>
          <View style={{ paddingVertical: spacingY._5 }}>
            <Typo
              fontWeight={"400"}
              color={colors.textLight}
              size={15}
              style={{
                fontFamily: "Poppins-Regular",
                gap: spacingY._10,
                rowGap: spacingY._10,
              }}
            >
              Please enter a new password
            </Typo>
          </View>

          {/* Input Container */}
          <View style={{ marginTop: spacingY._35, gap: spacingY._20 }}>
            <Input placeholder="Enter a new Password" icon={<LockIcon />} />
            <Input
              secureTextEntry
              placeholder="Confirm Your new Password"
              icon={<LockIcon />}
            />
            <Button>
              <Typo
                fontWeight={"600"}
                size={verticalScale(14)}
                color={colors.white}
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Change Password
              </Typo>
            </Button>
          </View>
        </View>
      </View>
      {/* Footer Text */}
    </ScreenWrapper>
  );
};

export default resetPassword;

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
  footerTextContainer: {
    paddingVertical: spacingY._10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 0,
  },
});
