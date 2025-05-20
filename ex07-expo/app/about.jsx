import React from "react";
import { View, Text, Switch } from "react-native";
import { useStore } from "@/zustand";

export default function About() {
  const { isEnableView, toggleIsEnableView } = useStore();

  return (
    <View>
      <Text>Tela Sobre</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnableView ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleIsEnableView}
        value={isEnableView}
      />
    </View>
  );
}
