import { Link, Tabs,Redirect  } from 'expo-router';
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/Estilo';

const Branco = '#E3E7E9';

export default function Inicio() {
  return (
    <View style={{ backgroundColor: Branco, flex: 1}}>

<Image
  source={require('../../assets/images/Logo.png')}
  style={ styles.Logo2}
/>
<Text style={styles.Titulo2}>Vinculum</Text>
<Text style={styles.SubTitulo2}>Bem-vindo(a) ao </Text>
<Text style={styles.SubTitulo2_2}>Vinculum</Text>
<Text style={styles.SubTitulo2_3}>Cuidando da sua saúde mental com acolhimento, respeito e profissionalismo.</Text>


<Image source={require('../../assets/images/Sofa.png')} style={styles.Sofa2} />
<Link href="./Escolha" asChild>  
<TouchableOpacity style={styles.Cadastrar}>
  <Text style={{ color: 'white'}}>Criar minha conta</Text>
</TouchableOpacity>
</Link>

<Link href="./Login" asChild>
<TouchableOpacity style={styles.Login}>
  <Text style={{ color: 'rgb(77, 126, 99)'}}>Fazer login</Text>
</TouchableOpacity>
</Link>

            <Tabs.Screen options={{ tabBarStyle: { display: 'none' } }} />
            <Tabs.Screen options={{ headerShown: false }} />
    </View>
  );
}