import { router } from 'expo-router';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react';
import { db } from './firebaseConnection';


export const Backend ={

CadastroCliente: async function CadastrarCliente(dados: { nome: string; email: string; senha: string; confirmarSenha: string }) {

     const { nome, email, senha, confirmarSenha } = dados;
if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }
else if(!nome || !email || !senha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos!");
    return;
  }
  else{
 await addDoc(collection(db, "Users"), {
    Senha: senha,
    Nome: nome,
    email: email,
    confirmarSenha: confirmarSenha
 } )
.then(() => {
router.push('./Inicio');})
.catch((error) => {
alert("Erro ao cadastrar cliente");
})

}
},

Login:async function Login(dados: { email: string; senha: string }) {

    const { email, senha } = dados;
    const q = query(collection(db, "Users"), 
    where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        alert("Usuário não encontrado");
        return;
    } 

        const userData = querySnapshot.docs[0].data();

        if (userData.Senha === senha) {
            router.push('./Inicio');
        } else {
            alert("Senha incorreta");
        }
    },
    
    



Olho:async function Olho(dados: { Seguranca: boolean, setSeguranca: React.Dispatch<React.SetStateAction<boolean>> }) {

    const {Seguranca, setSeguranca} = dados;

        setSeguranca(!Seguranca);
    },

Olho2:async function Olho2(dados: { Seguranca2: boolean, setSeguranca2: React.Dispatch<React.SetStateAction<boolean>> }) {

    const {Seguranca2, setSeguranca2} = dados;

        setSeguranca2(!Seguranca2);
    }
}