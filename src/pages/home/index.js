import React, { useState, useEffect, useContext } from 'react'
import {
	Button,
	Text,
	View,
	TextInput,
	Image,
	Keyboard,
} from 'react-native'
import 'react-native-gesture-handler'
import Styles from '../../components/styles'
import caoLogo from '../../../assets/icon.png'
import SocketContext from '../../global/context/index'

export default function Home({ navigation }) {
	const socket = useContext(SocketContext)
	const [name, setName] = useState('')
	const [roomId, setRoomId] = useState('')

	useEffect(() => {
		socket.on('getAllRooms', rooms => {
			setRooms(rooms)
		})
	}, [])

	const handleGoToLobby = () => {
		socket.emit('joinRoom', name, roomId)
		navigation.navigate('Lobby', {name})
	}

	return (
		<View style={Styles.container}>
			<View style={Styles.titleLayoutContainer}>
				<View style={Styles.logoContainer}>
					<Image source={caoLogo} />
				</View>
				<View style={Styles.nameTitleContainer}>
					<Text style={[Styles.whiteText, Styles.mainText]}>
						{'Cards \nAgainst \nOrt'}
					</Text>
				</View>
			</View>
			<View style={Styles.newGameInfoContainer}>
			<Text style={Styles.inputText}>
					Por favor, ingresá tu nombre:
				</Text>
				<TextInput
					style={Styles.input}
					value={name}
					onChangeText={setName}
					placeholder="Nombre"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<View style={Styles.spacer}/>
				<Text style={Styles.inputText}>
					Si tenés un número de sala, ingresalo aquí:
				</Text>
				<TextInput
					style={Styles.input}
					value={roomId}
					onChangeText={setRoomId}
					placeholder="Room ID"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<Button
					style={Styles.button}
					title="Unirme a la sala"
					color="grey"
					onPress={handleGoToLobby}
				/>
				<View style={Styles.spacer}/>
				<Text style={Styles.inputText}>
					Si no, crea una nueva sala:
				</Text>
				<Button
					style={Styles.button}
					title="Crear sala"
					color="green"
					onPress={handleGoToLobby}
				/>
			</View>
		</View>
	)
}
