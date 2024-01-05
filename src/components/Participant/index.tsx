import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

type ParticipantProps = {
  onPress: (name: string) => void
  name: string
}

export const Participant = ({ onPress, name }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={() => onPress(name)}>
        <Text style={styles.buttonText}>{'-'}</Text>
      </TouchableOpacity>
    </View>
  )
}
