import { registerRootComponent } from 'expo'
//import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
//import Styles from './components/styles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/home'
import About from './pages/about'
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
					<Stack.Screen name="About" component={About} />
				</Stack.Navigator>
			</NavigationContainer>
		</SocketContext.Provider>
	)
}

registerRootComponent(App)
