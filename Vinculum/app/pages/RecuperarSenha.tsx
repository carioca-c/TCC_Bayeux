import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/Estilo';

const Branco = '#E3E7E9';

export default function RecuperarSenha() {
  return (

 <View style={{ backgroundColor: Branco, flex: 1}}>

    <Text style={styles.Titulo4}>Recuperar Senha</Text>
    <Text style={styles.Subtitulo4}>Digite seu e-mail e enviaremos um link para redefinir sua senha</Text>

    <Text style={styles.LoginLabel1}>E-mail</Text>
        <TextInput style={styles.LoginEmail} placeholder="Digite seu email"></TextInput>


        <TouchableOpacity style={styles.BtnLogin}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Enviar link</Text></TouchableOpacity>
        
        <Link href="./Login" style={styles.VoltaLogin} >
         <Text style={styles.VoltaLogin}>Voltar para login</Text>
        </Link>
         

        <Image source={require('../../assets/images/Carta.png')} style={styles.Carta} /> 
         
</View>

  );
}