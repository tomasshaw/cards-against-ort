import { registerRootComponent } from 'expo'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/home'
import Lobby from './pages/lobby'
import Game from './pages/game'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" headerMode="none">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Lobby" component={Lobby} />
				<Stack.Screen name="Game" component={Game} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

registerRootComponent(App)
