import { router, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles/Estilo';

export default function Splash() {

useEffect(() => {
  const timer = setTimeout(() => {
    router.replace("./pages/Inicio");
  }, 1500);

  return () => clearTimeout(timer);
}, []);
  return (
    <View>
      <Image
        style={styles.Logo}
        source={require('../assets/images/Logo.png')}
      />

      <Text style={styles.Titulo}>Vinculum</Text>
      <Text style={styles.Subtitulo}>Clínica de Psicologia</Text>

      <Image
        style={styles.Sofa1}
        source={require('../assets/images/Sofa.png')}
      />

              <Tabs.Screen options={{ tabBarStyle: { display: 'none' } }} />
              <Tabs.Screen options={{ headerShown: false }} />

    </View>
  );
}