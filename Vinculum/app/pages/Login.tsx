import { Link, Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/Estilo';

import { Backend } from '../../src/Backend';


const Branco = '#E3E7E9';
const AzulClaro = '#123499';

export default function CadastroPaciente() {

    const [senha, setsenha] = useState('')
    const [email, setemail] = useState('')

    return (
<View style={{ backgroundColor: Branco, flex: 1}}>

    <Text style={styles.Titulo4}>Bem-vindo(a) de volta!</Text>
    <Text style={styles.Subtitulo4}>Faça login para continuar.</Text>

    <Text style={styles.LoginLabel1}>E-mail</Text>
    <TextInput style={styles.LoginEmail} value={email} onChangeText={ (text) => setemail(text) } placeholder="Digite seu email"></TextInput>
    
    <Text style={styles.LoginLabel1}>Senha</Text>
    <TextInput style={styles.LoginSenha} value={senha} onChangeText={ (text) => setsenha(text) } placeholder="Digite sua senha" secureTextEntry></TextInput>

<Link style={styles.EsqueciSenha} href="./RecuperarSenha">
<Text >Esqueci minha senha</Text>
</Link>

<TouchableOpacity style={styles.BtnLogin} onPress={() => Backend.Login({ email, senha })}>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Entrar</Text>
</TouchableOpacity>

<Text style={{ color: 'black', fontSize: 18, alignSelf: 'center', marginTop: 15 }}>Não tem conta? <Link style={{ color: AzulClaro, fontSize: 18, fontWeight: 'bold' }} href="./Escolha">Crie agora</Link></Text>
    <Tabs.Screen options={{ tabBarStyle: { display: 'none' } }} />
    <Tabs.Screen options={{ headerShown: false }} />
</View>
    );
}