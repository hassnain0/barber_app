import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { router } from "expo-router";
import { EnvelopeIcon, LockIcon, UserIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const register = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />
        <View
          style={{ paddingTop: spacingY._50, paddingHorizontal: spacingX._20 }}
        >
          <Typo
            fontWeight={"800"}
            size={30}
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Sign up
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
              Create a new account
            </Typo>
          </View>

          {/* Input Container */}
          <View style={{ marginTop: spacingY._35, gap: spacingY._20 }}>
            <Input placeholder="Name" icon={<UserIcon />} />
            <Input placeholder="Email" icon={<EnvelopeIcon />} />
            <Input secureTextEntry placeholder="Password" icon={<LockIcon />} />
            <Button
              onPress={() => router.navigate("/(modals)/phoneVerify_Modal")}
            >
              <Typo
                fontWeight={"600"}
                size={14}
                color={colors.white}
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Sign up
              </Typo>
            </Button>
          </View>

          {/* Terms and Conditions Text */}
          <View style={styles.textContainer}>
            <View style={styles.textRow}>
              <Typo
                fontWeight="400"
                color={colors.textLight}
                size={12}
                style={styles.text}
              >
                By continuing Sign up you agree to the following{"  "}
              </Typo>

              <Typo
                fontWeight="700"
                color={colors.primary} // or any blue color you like
                size={12}
                style={[styles.text, { textDecorationLine: "underline" }]}
                onPress={() => {
                  // navigation.navigate('Terms') or Linking.openURL()
                  console.log("Terms & Conditions clicked");
                }}
              >
                Terms & Conditions
              </Typo>

              <Typo
                fontWeight="400"
                color={colors.textLight}
                size={12}
                style={styles.text}
              >
                {" "}
                without reservation
              </Typo>
            </View>
          </View>
        </View>
      </View>
      {/* Footer Text */}

      <View style={styles.footerTextContainer}>
        <Typo
          fontWeight="400"
          color={colors.textLight}
          size={13}
          style={styles.text}
        >
          Already have an account?{" "}
        </Typo>
        <TouchableOpacity>
          <Typo
            fontWeight="700"
            color={colors.primary} // or any blue color you like
            size={13}
            style={[styles.text, { textDecorationLine: "underline" }]}
            onPress={() => {
              // navigation.navigate('Login') or Linking.openURL()
              console.log("Login clicked");
            }}
          >
            Sign In
          </Typo>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default register;

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
