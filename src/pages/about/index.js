import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Styles from '../../components/styles'
import io from 'socket.io-client'
const ENDPOINT = "http://127.0.0.1:4001";


const ChatMessages = ({chat}) => {
	console.log(chat);
	return (
		<View>
		{chat.map(m => <Text key={m}>{m}</Text>)}
		</View>
		)
}
export default function About({ navigation, route }) {
	const socket = io(ENDPOINT, {      
		transports: ['websocket']});


	const { name } = route.params || { name: 'Invitado' }

	const [chat, setChat] = useState([])
	const [mensaje, setMensaje] = useState('')

	useEffect(() => {
		socket.on('chat message', msg => {
			//setTheArray(oldArray => [...oldArray, newElement]);
			//const newChat = [...chat, msg]
			setChat(c => [...c, msg])
			console.log(chat)
		})
	},[])

	const submitChatMessage = () => {
		socket.emit('chat message', mensaje);
		setMensaje('');
	}

	

	return (
		<View style={Styles.container}>
			<StatusBar style="auto" />
			<Text style={Styles.white}>Hola {name}</Text>
			<TextInput 
				style={Styles.white}
				onChangeText={(m) => setMensaje(m)}
				onSubmitEditing={() => submitChatMessage()}
				value={mensaje}
			/>
			
			<ChatMessages 
			chat = {chat}
			/>
			

			<Button
				title="Go back"
				onPress={() => navigation.goBack()}
				//onPress={() => navigation.navigate('Home')}
				//onPress={() => navigation.push('Home')}
			/>
		</View>
	)
}
