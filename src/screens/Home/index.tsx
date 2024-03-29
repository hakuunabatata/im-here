import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Participant } from '../..'
import styles from './styles'

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [participant, setParticipant] = useState('')

  const addParticipant = () => {
    if (!participant) return
    if (participants.includes(participant))
      return Alert.alert(
        'Participante existente',
        'Participante já está na lista',
      )
    setParticipants([...participants, participant])
    setParticipant('')
  }

  const removeParticipant = (name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter(n => n !== name))
        },
      },
      { text: 'Não', style: 'cancel' },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>
        Sexta, 05 de Janeiro de 2023
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipant}
          value={participant}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={addParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={removeParticipant}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>
            Ninguém no evento ainda? Adicione participantes
          </Text>
        )}
      ></FlatList>
    </View>
  )
}
