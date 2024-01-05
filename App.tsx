import { StatusBar } from 'expo-status-bar'
import { Home } from './src'

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        style='dark'
      />
      <Home />
    </>
  )
}
