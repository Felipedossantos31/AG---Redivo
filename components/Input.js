import { TextInput } from 'react-native'

export default function Input(props) {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 8
      }}
      {...props}
    />
  )
}