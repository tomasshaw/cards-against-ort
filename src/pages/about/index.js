import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Button, Text,  View } from 'react-native'
import Styles from '../../components/styles'

const ChatMessages = ({ chat }) => {
	return (
		<View>
			{chat.map((m, i) => (
				<Text key={m + i}>{m}</Text>
			))}
		</View>
	)
}

export default function About({ navigation, route }) {
	const { socket, name, roomId } = route.params // || { name: 'Invitado' }
	const [chat, setChat] = useState([])
	const [mensaje, setMensaje] = useState('')

	useEffect(() => {
		socket.on('chat message', msg => {
			setChat(c => [...c, msg])
		})
		return () => {
			socket.disconnect()
		}
	}, [])

	const submitChatMessage = () => {
		socket.emit('chat update', mensaje)
		setMensaje('')
	}

	return (
		<View style={Styles.container}>
			<StatusBar style="auto" />
			<Text style={Styles.white}>Hola {name}</Text>
			<Text style={Styles.white}> Estas en la room {roomId} </Text>
			<TextInput
				style={Styles.white}
				onChangeText={m => setMensaje(m)}
				onSubmitEditing={() => submitChatMessage()}
				value={mensaje}
			/>

			<ChatMessages chat={chat} />

			<Button
				title="Go back"
				onPress={() => navigation.goBack()}
			/>
		</View>
	)
}
