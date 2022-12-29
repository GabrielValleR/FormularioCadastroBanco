import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

const Register = () => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')
    const [sexo, setSexo] = useState("Sexo")
    const [limite, setLimite] = useState(500)
    const [estudante, setEstudante] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [status, setStatus] = useState(false)


    function getName(nome) {
        setNome(nome)
    }
    function getIdade(idade) {
        setIdade(idade)
    }
    function getEmail(email) {
        setEmail(email)
    }
    function verification() {
        if (status == false) {
            setErrorMessage("Campo Obrigatório*")
        }
    }
    function registrar() {
        if (nome === '' || idade === '' || email === '') {
            verification();
            alert('Preencha todos dados corretamente!')

        } else {
            alert(
                'Conta aberta com sucesso!! \n\n' +
                'Nome: ' + nome+ '\n' +
                'Idade: ' + idade + '\n' +
                'Sexo: ' + ((sexo) == 1 ? 'Masculino' : 'Feminino') + ' \n' +
                'Limite Conta: ' + limite.toFixed(2) + '\n' +
                'Conta Estudante: ' + ((estudante) ? 'Ativo' : 'Inativo'))
            setErrorMessage('')
        }
    }

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Nova Conta</Text>
            <View>
                <Text style={styles.text}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    underlineColorAndroid="transparent"
                    onChangeText={getName}
                />
                <Text style={styles.textError}>{errorMessage}</Text>
            </View>
            <View>
                <Text style={styles.text}>Idade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu idade"
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={getIdade}
                />
                <Text style={styles.textError}>{errorMessage}</Text>
            </View>

            <View>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    underlineColorAndroid="transparent"
                    onChangeText={getEmail}
                />
                <Text style={styles.textError}>{errorMessage}</Text>
            </View>
            <Picker
                selectedValue={sexo}
                onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}

            >
                <Picker.Item style={styles.text} key={1} value={1} label="Masculino" />
                <Picker.Item style={styles.text} key={2} value={2} label="Feminino" />
            </Picker>
           
            <View>
                <Text style={[styles.text, { fontSize: 20 }]}>Limite de crédito desejado</Text>
                <View>
                    <Text style={[styles.text, { textAlign: 'center' }]}>R${limite.toFixed(2)}</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={2000}
                        onValueChange={(valor) => setLimite(valor)}
                        value={limite}
                    />
                </View>

            </View>
            <View>
                <View style={styles.content}>
                    <Text>Você é estudande?</Text>
                    <Switch
                        value={estudante}
                        onValueChange={(aluno) => setEstudante(aluno)}
                    />
                </View>
                <Text style={{ textAlign: 'center', color: '#000' }}>
                    {(estudante) ? "Sou estudande!" : "Não sou estudante!"}
                </Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={() => registrar()}>
                    <Text style={styles.textButton}>Abrir conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: "bold",
        margin: 20,
        color: '#000',
    },
    content: {
        flexDirection: 'row',

    },
    input: {
        width: 350,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5
    },
    textError: {
        fontSize: 12,
        color: 'red',
        marginBottom:10,
    },
    viewButton: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 230,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#ff8c00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    }

})

export default Register