import { View, Text, Alert } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import Botao from '../components/Botao'

export default function CadastroScreen({ route, navigation }) {
  const { setDados } = route.params

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  function cadastrar() {
    if (!nome || !idade) {
      Alert.alert("Erro", "Preencha todos os campos")
      return
    }

    if (isNaN(idade)) {
      Alert.alert("Erro", "Idade deve ser número")
      return
    }

    setDados(prev => [...prev, { nome, idade }])
    navigation.goBack()
  }

  return (
    <View>
      <Text>Cadastro</Text>

      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <Input placeholder="Idade" value={idade} onChangeText={setIdade} />

      <Botao titulo="Salvar" onPress={cadastrar} />
    </View>
  )
}