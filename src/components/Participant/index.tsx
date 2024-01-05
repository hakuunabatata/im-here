import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

type ParticipantProps = {
  onRemove: (name: string) => void
  name: string
}

export const Participant = ({ onRemove, name }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemove(name)}
      >
        <Text style={styles.buttonText}>{'-'}</Text>
      </TouchableOpacity>
    </View>
  )
}
