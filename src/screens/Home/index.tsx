import { Text, View, TextInput } from 'react-native'
import styles from './styles'

export const Home = () => (
  <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventDate}>Sexta, 05 de Janeiro de 2023</Text>
    <TextInput
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor="#6B6B6B"
    />
  </View>
)
