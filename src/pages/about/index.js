import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Styles from '../../components/styles'

export default function About({ navigation, route }) {
	const { name } = route.params || { name: 'Invitado' }

	return (
		<View style={Styles.container}>
			<StatusBar style="auto" />
			<Text style={Styles.white}>Hola {name}</Text>

			<Button
				title="Go back"
				onPress={() => navigation.goBack()}
				//onPress={() => navigation.navigate('Home')}
				//onPress={() => navigation.push('Home')}
			/>
		</View>
	)
}
