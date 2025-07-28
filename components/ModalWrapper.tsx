import { ModalWrapperProps } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

const ModalWrapper = ({ style, children, bg }: ModalWrapperProps) => {
  return (
    <View style={[style, { flex: 1, backgroundColor: bg }]}>{children}</View>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({});
