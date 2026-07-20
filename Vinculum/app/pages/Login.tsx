import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { styles } from '../../styles/Estilo';  

const Branco = '#E3E7E9';
const AzulClaro = '#123499';

export default function CadastroPaciente() {
    return (
<View style={{ backgroundColor: Branco, flex: 1}}>

    <Text style={styles.Titulo4}>Bem-vindo(a) de volta!</Text>
    <Text style={styles.Subtitulo4}>Faça login para continuar.</Text>

    <Text style={styles.LoginLabel1}>E-mail</Text>
    <TextInput style={styles.LoginEmail} placeholder="Digite seu email"></TextInput>
    
    <Text style={styles.LoginLabel1}>Senha</Text>
    <TextInput style={styles.LoginSenha} placeholder="Digite sua senha" secureTextEntry></TextInput>

<Text style={styles.EsqueciSenha}>Esqueci minha senha</Text>


<TouchableOpacity style={styles.BtnLogin}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Entrar</Text></TouchableOpacity>
<Text style={{ color: 'black', fontSize: 18, alignSelf: 'center', marginTop: 35 }}>Não tem conta? <Link style={{ color: AzulClaro, fontSize: 18, fontWeight: 'bold' }} href="./Cadastro">Crie agora</Link></Text>
    <Tabs.Screen options={{ tabBarStyle: { display: 'none' } }} />
    <Tabs.Screen options={{ headerShown: false }} />
</View>
    );
}