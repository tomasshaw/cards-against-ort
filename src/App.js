import { registerRootComponent } from 'expo'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator, headerBackTitle, headerTransparent} from '@react-navigation/stack'
import Home from './pages/home'
import Lobby from './pages/lobby'
import Game from './pages/game'
// import GlobalContext from './global/context/index'
// import GlobalProvider from './services/global/index'
import 'react-native-gesture-handler'
import io from 'socket.io-client'
const ENDPOINT = "http://127.0.0.1:4001";
const socket = io(ENDPOINT);  

import SocketContext from './global/context/index'

const Stack = createStackNavigator()
export default function App() {


	return (
	<SocketContext.Provider value={socket}>
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" >
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
				<Stack.Screen name="Lobby" component={Lobby} headerMode='float' options= {{headerBackTitle: 'Atrás', headerTransparent:true, headerTitle: '', headerBackStyle: { paddingStart: 20 }, headerBackAllowFontScaling: true}} />
				<Stack.Screen name="Game" component={Game} options={{ headerShown: false }}/>
			</Stack.Navigator>
		</NavigationContainer>
	</SocketContext.Provider>	
	)
}

registerRootComponent(App)
