import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useStore } from "@/zustand";

export default function Index() {
  const { isEnableView } = useStore();
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        isEnableView && { backgroundColor: "beige" },
      ]}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">Tela Sobre</Link>
      <Link href="/tasks">Tarefas</Link>
    </View>
  );
}
