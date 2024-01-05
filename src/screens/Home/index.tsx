import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Participant } from '../..'

export const Home = () => {
  const addParticipant = () => {
    console.log('Clicou no +')
  }

  const removeParticipant = () => {
    console.log('Clicou no -')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 05 de Janeiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={addParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant onPress={removeParticipant} />
    </View>
  )
}
