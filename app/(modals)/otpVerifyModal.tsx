import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import ModalWrapper from "@/components/ModalWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import { OTPInput, type OTPInputRef, type SlotProps } from "input-otp-native";
import React, { useEffect, useRef } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const OtpVerify = () => {
  const router = useRouter();
  const ref = useRef<OTPInputRef>(null);

  const onComplete = (code: string) => {
    Alert.alert("Completed with code:", code);
    ref.current?.clear();
  };

  function Slot({ char, isActive, hasFakeCaret }: SlotProps) {
    return (
      <View
        style={[
          styles.slot,
          isActive && styles.activeSlot,
          char === null && styles.emptySlot,
        ]}
      >
        {char !== null ? (
          <Text style={styles.char}>{char}</Text>
        ) : hasFakeCaret ? (
          <FakeCaret />
        ) : (
          <Text style={styles.dash}>-</Text>
        )}
      </View>
    );
  }

  function FakeDash() {
    return (
      <View style={styles.fakeDashContainer}>
        <View style={styles.fakeDash} />
      </View>
    );
  }

  function FakeCaret() {
    const opacity = useSharedValue(1);

    useEffect(() => {
      opacity.value = withRepeat(
        withSequence(
          withTiming(0, { duration: 500 }),
          withTiming(1, { duration: 500 })
        ),
        -1,
        true
      );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
    }));

    return <Animated.View style={[styles.fakeCaret, animatedStyle]} />;
  }

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
            Verify phone
          </Typo>
          <View>
            <Typo
              size={verticalScale(14)}
              fontWeight="400"
              color={colors.textLight}
            >
              Please enter the 4 digit security code we just sent you at{" "}
              <Typo
                fontWeight="700"
                color={colors.primary}
                size={verticalScale(14)}
              >
                333-160-xxxx
              </Typo>
            </Typo>
          </View>
        </View>

        <View
          style={{
            gap: 20,
            marginTop: spacingY._30,
            justifyContent: "space-between",
          }}
        >
          <OTPInput
            ref={ref}
            onComplete={onComplete}
            containerStyle={styles.otpContainer}
            maxLength={4}
            render={({ slots }) => (
              <View style={styles.slotsContainer}>
                {slots.map((slot, idx) => (
                  <React.Fragment key={idx}>
                    <Slot {...slot} />
                    {idx === -1 && <FakeDash />}
                  </React.Fragment>
                ))}
              </View>
            )}
          />
          <Button onPress={() => router.push("/(modals)/forgotPasswordModal")}>
            <Typo
              fontWeight="600"
              size={14}
              color={colors.white}
              style={{ fontFamily: "Poppins-Regular" }}
            >
              Continue
            </Typo>
          </Button>
        </View>
      </View>
      {/* Footer Text */}
      <View>
        <Typo
          size={verticalScale(13)}
          fontWeight="400"
          color={colors.primaryDark}
          style={styles.text}
        >
          Resend in 40 sec
        </Typo>
      </View>
    </ModalWrapper>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._20,
  },
  text: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  slotsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  otpContainer: {
    alignItems: "center",
  },

  fakeDashContainer: {
    width: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  fakeDash: {
    width: 8,
    height: 2,
    backgroundColor: "#E5E7EB",
    borderRadius: 1,
  },
  slot: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    justifyContent: "center",
  },
  activeSlot: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 6, // for Android shadow
  },
  emptySlot: {
    backgroundColor: "#F9FAFB",
  },
  char: {
    fontSize: 24,
    fontWeight: "600",
    color: "#111827",
  },
  dash: {
    fontSize: 24,
    color: "#9CA3AF",
  },
  fakeCaret: {
    width: 2,
    height: 28,
    backgroundColor: "#111827",
    borderRadius: 1,
  },
});
