import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="about" options={{ title: "Sobre" }} />
      <Stack.Screen name="tasks" options={{ title: "Tarefas" }} />
    </Stack>
  );
}
