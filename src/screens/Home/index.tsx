import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../..'
import styles from './styles'

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])

  const addParticipant = (name: string) => {
    if (!participants.includes(name)) setParticipants([...participants, name])
    else console.log(`${name} já existe`)
  }

  const removeParticipant = (name: string) => {
    setParticipants(participants.filter((n) => n !== name))
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => addParticipant('aaa')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {participants.sort().map((name, index) => (
        <Participant key={index} onPress={removeParticipant} name={name} />
      ))}
    </View>
  )
}
