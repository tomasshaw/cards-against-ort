import { registerRootComponent } from 'expo'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/home'
import Lobby from './pages/lobby'
import Game from './pages/game'
import 'react-native-gesture-handler'
import io from 'socket.io-client'
const ENDPOINT = "http://127.0.0.1:4001";
const SocketContext = React.createContext()

const socket = io(ENDPOINT, {      
	transports: ['websocket'], upgrade: false});  

const Stack = createStackNavigator()

export default function App() {

	useEffect(() => {
		socket.connect();
	},[])
	

	return (
		<SocketContext.Provider value={socket}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" headerMode="none" >
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Lobby" component={Lobby} />
					<Stack.Screen name="Game" component={Game} />
					</Stack.Navigator>
			</NavigationContainer>
		</SocketContext.Provider>
	)
}

registerRootComponent(App)
