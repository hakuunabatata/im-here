import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

type ParticipantProps = {
  onPress: () => void
}

export const Participant = ({ onPress }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{'-'}</Text>
      </TouchableOpacity>
    </View>
  )
}
