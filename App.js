import { StyleSheet, Text, View } from "react-native"
import AppLoading from 'expo-app-loading'
import MyAppText from "./src/ui/MyAppText"
import Home from "./src/views/Home"
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Section from './src/views/Section'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Section" style={styles.app}>
        
          {/*<Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
            style={styles.app}
          />*/}
          <Stack.Screen
            name="Section"
            component={Section}
            options={{
              headerShown: false
            }}
            style={styles.app}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
