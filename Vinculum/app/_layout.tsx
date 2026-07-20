import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="Splash" />
      <Stack.Screen name="pages/Login" />
      <Stack.Screen name="pages/Escolha" />
      <Stack.Screen name="pages/Inicio" />
      <Stack.Screen name="pages/Tabs" />
    </Stack>
  );
}