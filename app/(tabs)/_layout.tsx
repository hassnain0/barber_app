import { CustomTabs } from "@/components/CustomTabs";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="location" options={{ title: "Location" }} />
      <Tabs.Screen name="appointment" options={{ title: "Appointment" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />

      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
