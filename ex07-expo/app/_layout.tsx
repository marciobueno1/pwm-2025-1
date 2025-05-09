import React from "react";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Inicio" }} />
        <Stack.Screen name="about" options={{ title: "Sobre" }} />
        <Stack.Screen name="tasks" options={{ title: "Tarefas" }} />
      </Stack>
    </QueryClientProvider>
  );
}
