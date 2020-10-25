import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, Text, View, TextInput } from 'react-native'
import Styles from '../../components/styles'

export default function Home({ navigation }) {
	const [nombre, setNombre] = useState('')

	return (
		<View style={Styles.container}>
			<Text style={Styles.white}>Home</Text>
			<StatusBar style="auto" />

			<TextInput
				style={Styles.white}
				value={nombre}
				onChangeText={setNombre}
				placeHolder="Ingrese nombre"
			/>

			<Button
				title="Go to About"
				onPress={() => navigation.navigate('About', { nombre })}
			/>
		</View>
	)
}
