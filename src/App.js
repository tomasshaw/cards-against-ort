import { registerRootComponent } from 'expo'
//import { StatusBar } from 'expo-status-bar'
import React from 'react'
//import Styles from './components/styles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/home'
import About from './pages/about'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" headerMode="none">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="About" component={About} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

registerRootComponent(App)
