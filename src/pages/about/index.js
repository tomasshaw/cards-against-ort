import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Styles from '../../components/styles'

export default function About({ navigation, route }) {
	//route trae los params
	const { nombre } = route.params || { nombre: '' }

	return (
		<View style={Styles.container}>
			<Text style={Styles.white}>Hola {route.params.nombre}</Text>
			<StatusBar style="auto" />

			<Button
				title="Go back"
				onPress={() => navigation.goBack()}
				//onPress={() => navigation.navigate('Home')}
				//onPress={() => navigation.push('Home')}
			/>
		</View>
	)
}
