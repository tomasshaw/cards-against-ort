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
	const [checkName, setCheckName] = useState('false')

	const handleGoToLobby = () => {
		socket.emit('join_room', name, roomId)
		navigation.navigate('Lobby', { name })
	}

	useEffect(() => {
		setCheckName(name === '')
	}, [name])

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
				<Text style={Styles.inputText}>Enter name:</Text>
				<TextInput
					style={Styles.input}
					value={name}
					onChangeText={setName}
					placeholder="Nombre"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<View style={Styles.spacer} />
				<Text style={Styles.inputText}>
					If you have a Room ID enter it, else begin new game
				</Text>
				<TextInput
					style={Styles.input}
					value={roomId}
					onChangeText={setRoomId}
					placeholder="Room ID"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<View style={Styles.spacer} />
				<Text style={Styles.inputText}></Text>
				<Button
					title={roomId === '' ? 'New Game' : 'Join Game'}
					color={roomId === '' ? 'green' : '#63C132'}
					disabled={checkName}
					onPress={handleGoToLobby}
				/>
			</View>
		</View>
	)
}
