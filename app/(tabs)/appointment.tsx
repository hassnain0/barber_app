import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { verticalScale } from "@/utils/styling";
import { colors, radius } from "@/constants/theme";
import { Picker } from '@react-native-picker/picker';
import { WheelPicker } from '@delightfulstudio/react-native-wheel-picker-android';
import DateWheelExpo from "@/components/DataWheel";

const appointment = () => {

  //State Hooks
  const [selectedMonth, setSelectedMonth] = useState('');

  const [selectedIndex, setSelectedIndex] = useState(2);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (

  <ScreenWrapper  backgroundColor={colors.white}>
    <View style={styles.container}>
      <View><Typo size={24} style={{fontFamily:"Poppins_600SemiBold"}} color={colors.textDark}>Book Appointment</Typo></View>
      <View style={{justifyContent:'space-between',marginTop:verticalScale(15)}}>
       
        <Picker
        selectedValue={selectedMonth}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
        style={styles.picker}
        dropdownIconColor={colors.black}
      >
        <Picker.Item label="Select Date" value=""  />
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={month} />
        ))}
      </Picker>
      </View>
    <DateWheelExpo/>
    </View>
  </ScreenWrapper>
  );
};

export default appointment;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:verticalScale(15),
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    height: verticalScale(70),
    borderRadius: radius._10,
  },
  selected: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  wheelContainer: {
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheel: {
    width: 100,
    height: 160,
  },
  highlight: {
    position: 'absolute',
    top: 60,
    width: 100,
    height: 40,
    borderColor: '#3C46FF',
    borderWidth: 2,
    borderRadius: 8,
  },
});
