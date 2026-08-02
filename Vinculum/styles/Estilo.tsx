import { StyleSheet } from 'react-native';

const Branco = '#e3e7e9';
const AzulClaro = '#123499';
const AzulMedio = '#0a2a72';
const AzulEscuro = '#051650';
const MarromClaro = '#7c3b1a';
const MarromMedio = '#66280a';
const MarromEscuro = '#5b1f00';
const VerdeBaitola = '#304b3c';
const VerdeBaitola2 = 'rgb(77, 126, 99)';

const Preto = '#000000';

export const styles = StyleSheet.create({

    Titulo:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
        marginTop: -20,
        padding:10,

    },
    Subtitulo:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginTop: -15,
        padding: 5,

    },
    Sofa1:{
        width: 300,
        height: 200,
    alignSelf: 'center', 
        marginTop: 30,
    },
    Logo:{
         width: 110, 
         height: 120,
         marginTop: 170,
        alignSelf: 'center', 
         padding: 50
    },
    //pt2

    Logo2:{
        width: 50,
        height: 55,
        marginTop: 80,
        marginLeft: 105,
        padding: 5,
    },
    Titulo2:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 27,
        textAlign: 'center',
        marginTop: -45,
        marginLeft: 50,
    },
    SubTitulo2:{
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 50,
        marginLeft: 88,
    },
    SubTitulo2_2:{
        fontWeight: 'bold',
        fontSize: 28,
        color: VerdeBaitola2,
        alignSelf: 'center', 
    },
 SubTitulo2_3: {
    fontSize: 18,
    marginTop: 10,
    width: 300,
    textAlign: 'center', 
    alignSelf: 'center', 
    lineHeight: 20,
},
Sofa2:{
    alignSelf: 'center',
    width: 350,
    height: 250,
    marginTop: 20,
},
Cadastrar:{
    width: 250,
    height: 45,
    backgroundColor: VerdeBaitola2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
},
Login:{
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: VerdeBaitola2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
},
    //pt3

Titulo3:{
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    fontSize: 27,
    textAlign: 'center',
    marginTop: 80,
},
Subtitulo3:{   
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
},
Icone_paciente1:{
    width: 90,
    height: 95,
    marginTop: 35,
    marginLeft: 30,
},
Paciente:{
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: -85,
    marginLeft: 150,
},
SubPaciente:{
    width: 230,
    fontSize: 18,
    textAlign: 'left',
    marginTop: 3,
    marginLeft: 150,
},
Container:{
    width: 350,
    height: 190,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'rgb(77, 126, 99)',
    marginTop: 40,
},
Icone_Medico1:{
    width: 90,
    height: 95,
    marginTop: 35,
    marginLeft: 30,
},
Medico:{
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: -85,
    marginLeft: 150,
},
SubMedico:{
    width: 230,
    fontSize: 18,
    textAlign: 'left',
    marginTop: 3,
    marginLeft: 150,
},
//Pt4

Titulo4:{
fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    fontSize: 27,
    marginTop: 140,
},
Subtitulo4:{   
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    alignSelf: 'center',
},
LoginEmail:{
    width: 300,
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
},
LoginSenha:{
    width: 300,
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
    
},
LoginLabel1:{
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 60,
    fontSize: 18,
    marginTop: 50,
},
EsqueciSenha:{
    fontWeight: 'bold',
    color: AzulClaro,
    marginLeft: 195,
    fontSize: 15,
    marginTop: 10,
},
BtnLogin:{
    width: 300,
    height: 55,
    backgroundColor: VerdeBaitola2,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
},



//pt5

VoltaLogin:{
alignSelf:'center',
 fontWeight: 'bold',
    color: AzulClaro,
    fontSize: 15,
    margin:15,
    
},

Carta:{
    alignItems:'center',
    width: 230,
    height:230,
    alignSelf:'center',
    marginTop:30,

},

//pt6

CaixasConta:{
    width: 300,
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 5,
    paddingLeft: 20,
    borderRadius: 10,

},
CaixasContaSenhas:{
    width: 245,
    height: 55,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,

    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 5,
    paddingLeft: 20,
    borderRadius: 10,
    marginRight: 55,
    borderRightWidth: 0,

},
LoginLabel6:{
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 60,
    fontSize: 18,
    marginTop: 25,
},
BtnCriarConta1:{
    width: 300,
    height: 55,
    backgroundColor: VerdeBaitola2,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
},
BtnOlho:{
    width: 55,
    height: 55,
    borderRightWidth: 1,
    alignSelf: 'flex-end',
    marginRight: 63,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'gray',
    borderLeftWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: -55,
    justifyContent: 'center',
    alignItems: 'center',


}






});