import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/Estilo';

import { Backend } from '../../src/Backend';

const Branco = '#E3E7E9';

export default function CadastroPaciente() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const [Seguranca, setSeguranca] = useState(true)
    const [Seguranca2, setSeguranca2] = useState(true)

  return (

 <View style={{ backgroundColor: Branco, flex: 1}}>

    <Text style={styles.Titulo4}>Criar conta</Text>
        <Text style={styles.Subtitulo4}>Preencha seu dados para criar sua conta.</Text>

        <Text style={styles.LoginLabel6}>Nome ou Apelido</Text>
        <TextInput style={styles.CaixasConta}  placeholder="Digite seu nome" value={nome} onChangeText={ (text) => setNome(text)}></TextInput>

        <Text style={styles.LoginLabel6}>E-mail</Text>
        <TextInput style={styles.CaixasConta} placeholder="Digite seu email" value={email} onChangeText={ (text) => setEmail(text)}></TextInput>

        <Text style={styles.LoginLabel6}>Senha</Text>
        <TextInput style={styles.CaixasContaSenhas} secureTextEntry={Seguranca} placeholder="Digite sua senha" value={senha} onChangeText={ (text) => setSenha(text)}></TextInput>
        <TouchableOpacity style={styles.BtnOlho} onPress={() => Backend.Olho({ Seguranca, setSeguranca })}>
            <Text>{Seguranca ? "1" : "0"}</Text>
        </TouchableOpacity>

        <Text style={styles.LoginLabel6}>Confirmar senha</Text>
        <TextInput style={styles.CaixasContaSenhas} secureTextEntry={Seguranca2} placeholder="Confirme sua senha" value={confirmarSenha} onChangeText={ (text) => setConfirmarSenha(text)}></TextInput>
        <TouchableOpacity style={styles.BtnOlho} onPress={() => Backend.Olho2({ Seguranca2, setSeguranca2 })}>
            <Text>{Seguranca2 ? "1" : "0"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnCriarConta1} onPress={() => Backend.CadastroCliente({ nome, email, senha, confirmarSenha })} ><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }} >Criar conta</Text></TouchableOpacity>


 </View>

   );
}