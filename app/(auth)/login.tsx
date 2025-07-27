import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { useRouter } from "expo-router";
import { EnvelopeIcon, LockIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const login = () => {
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
            Sign In
          </Typo>
          <View style={{ paddingVertical: spacingY._5 }}>
          <Typo
            fontWeight={"400"}
            color={colors.textLight}
            size={15}
            style={{ fontFamily: "Poppins-Regular",gap: spacingY._10, rowGap: spacingY._10 }}
          >
            Welcome Back
          </Typo>
          </View>

          {/* Input Container */}
          <View style={{ marginTop: spacingY._35, gap: spacingY._20 }}>
            <Input placeholder="Email" icon={<EnvelopeIcon />} />
            <Input secureTextEntry placeholder="Password" icon={<LockIcon />} />
            <Button>
              <Typo
                fontWeight={"600"}
                size={14}
                color={colors.white}
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Sign In
              </Typo>
            </Button>
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
              Don't have an account?{" "}
            </Typo>
            <TouchableOpacity  onPress={()=>{router.navigate('/(auth)/register')}}>
            <Typo
              fontWeight="700"
              color={colors.primary} // or any blue color you like
              size={13}
              style={[styles.text, { textDecorationLine: "underline" }]}
             
            >
              Sign Up
            </Typo>
            </TouchableOpacity>
          </View>
    </ScreenWrapper>
  );
};

export default login;

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
    paddingVertical: spacingY._10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    bottom:0,
  }
});
