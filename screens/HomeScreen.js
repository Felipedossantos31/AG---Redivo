import { View, Text, Button, FlatList } from 'react-native'
import { useState } from 'react'

export default function HomeScreen({ navigation }) {
  const [dados, setDados] = useState([])

  return (
    <View>
      <Text>Lista de usuários</Text>

      <FlatList
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.nome} - {item.idade}</Text>
        )}
      />

      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastro', { setDados })}
      />
    </View>
  )
}