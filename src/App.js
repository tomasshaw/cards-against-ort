import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Styles from './components/styles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/home'
import About from './pages/about'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						tittle: 'My Home',
					}}
				/>
				<Stack.Screen name="About" component={About} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

registerRootComponent(App)

// Ejemplo con TabNavigator (creo que a nosotros nos conviene usar Stack)
/*return (
	<NavigationContainer>
	  <Tab.Navigator initialRouteName='Home'>
		<Tab.Screen name='Home' component={Home} options={
		  {
			tittle: "My Home"
		  }
		}/>
	  <Tab.Screen name='About' component={About} />
	</Tab.Navigator>
	</NavigationContainer>
);*/
