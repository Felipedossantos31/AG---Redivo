import { TouchableOpacity, Text } from 'react-native'

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#007bff',
        padding: 12,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center'
      }}
    >
      <Text style={{ color: '#fff' }}>{titulo}</Text>
    </TouchableOpacity>
  )
}