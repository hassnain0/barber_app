import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import MapView from 'react-native-maps';
const location = () => {
  return (
    <ScreenWrapper>
    <MapView style={styles.map} />
    </ScreenWrapper>
  );
};

export default location;

const styles = StyleSheet.create({
   map: {
    width: '100%',
    height: '100%',
  },
});
