import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/Estilo';

const Branco = '#E3E7E9';

export default function Escolha() {
    return (
<View style={{ backgroundColor: Branco, flex: 1}}> 
    <Text style={styles.Titulo3}>
        Como deseja{"\n"} utilizar o Vinculum?
    </Text>

    <Text style={styles.Subtitulo3}>
        Selecione uma opções para {"\n"}continuar.
    </Text>

<Link href="./CadastroPaciente" asChild>
<TouchableOpacity>
<View style={styles.Container}>
    <Image 
     source={require('../../assets/images/Paciente.png')} 
     style={styles.Icone_paciente1} />

    <Text style={styles.Paciente}>
        Sou Paciente
    </Text>

    <Text style={styles.SubPaciente}>
        Quero buscar apoio e acompanhamento profissional.
    </Text>
</View>
</TouchableOpacity>
</Link>

<Link href="./CadastroProfissional" asChild>
<TouchableOpacity>
    <View style={styles.Container}>
    <Image 
     source={require('../../assets/images/Medico.png')} 
     style={styles.Icone_Medico1} />

    <Text style={styles.Medico}>
        Sou Profissional
    </Text>

    <Text style={styles.SubMedico}>
        Quero atender {"\n"}pacientes e gerenciar {"\n"}minha clínica.
    </Text>
</View>
</TouchableOpacity>
</Link>

    <Tabs.Screen options={{ tabBarStyle: { display: 'none' } }} />
    <Tabs.Screen options={{ headerShown: false }} />
</View>
    );
}