import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { CheckCircleIcon } from "phosphor-react-native";
import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Typo from "@/components/Typo";
import Button from "@/components/Button";

const VerifiedModal = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.nestedContainer}>
          <CheckCircleIcon size={verticalScale(40)} color={colors.green} />
          <Typo
            size={24}
            style={{
              fontFamily: "Poppins_700Bold",
              textAlign: "center",
              marginTop: verticalScale(12),
            }}
          >
            Your Appointment {"\n"} Booking is Successful
          </Typo>

          <Typo
            size={14}
            style={{
              fontFamily: "Poppins_400Regular",
              textAlign: "center",
              marginTop: verticalScale(10),
              paddingHorizontal: 20,
            }}
          >
            You can view the appointment booking info {"\n"} in the “Appointment”
            section.
          </Typo>
        </View>

        {/* Footer */}
       
      </View>
       <View style={styles.footer}>
          <Button style={styles.button}  >
            <Typo color={colors.white}>Continue Booking</Typo>
          </Button>
          <TouchableOpacity style={{ marginTop: verticalScale(20),alignSelf:'center' }}>
            <Typo styles={{fontFamily:"Poppins_400Regular"}} size={verticalScale(14)} color={colors.primaryDark}>Go to Appointment</Typo>
          </TouchableOpacity>
        </View>
    </ScreenWrapper>
  );
};

export default VerifiedModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nestedContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
 button:{
  width:'90%',
  alignSelf:'center',
 },
 footer:{
  marginBottom:verticalScale(30),
 }
});
