// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="Minhas_Consaultass"
        options={{ title: 'Consultas' }}
      />
      <Tabs.Screen
        name="Grupo"
        options={{ title: 'Grupo' }}
      />
    </Tabs>
  );
}
