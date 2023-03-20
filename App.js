import { StyleSheet, Text, View } from "react-native"
import AppLoading from 'expo-app-loading'
import MyAppText from "./src/ui/MyAppText"
import Home from "./src/views/Home"
export default function App() {

  return (
    <View style={styles.app}>
      {/*<MyAppText texto={"Hola Mundo"} />*/}
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
