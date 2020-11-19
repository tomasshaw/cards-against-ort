import React, { useState, useContext } from 'react'
import {
	SafeAreaView,
	Button,
	Text,
	View,
	TextInput,
	Image,
	Share,
	Keyboard,
} from 'react-native'
import Styles from '../../components/styles'
import caoLogo from '../../../assets/icon.png'
import SocketContext from '../../global/context/index'

export default function Home({ navigation }) {
	const socket = useContext(SocketContext)
	console.log(socket)

	const [name, setName] = useState('')

	const [lobbyId, setLobbyId] = useState('')
	const isExistingGame = lobbyId.length > 2

	const handleGoToLobby = () => {
		navigation.navigate('Lobby', { name, lobbyId })
	}

	const [roomId, setRoomId] = useState('')
	// const isExistingGame = room.length > 2

	// // const socket = io(ENDPOINT, {
	// // 	transports: ['websocket'], upgrade: false});

	// // useEffect(() => {
	// // 	socket.connect();
	// // },[])

	// socket.on('message', message => {
	// 		console.log(message)});

	// const handleNewGame = () => {
	// 	socket.emit('create room', room, name)
	// 	navigation.navigate('About', { name, room })
	//
	const handleJoinGame = () => {
		socket.emit('joinRoom', name, roomId)
		navigation.navigate('About', { socket, name, roomId })
	}
	const shareOptions = {
		message: 'Hola! Te estoy invitando a jugar a CAO.',
		url: 'cao://app/lobbyId',
	}
	const onSharePress = () => Share.share(shareOptions)

	return (
		<SafeAreaView style={Styles.container}>
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
			<View style={Styles.spacer} />
			<View style={Styles.newGameInfoContainer}>
				<TextInput
					style={Styles.input}
					value={name}
					onChangeText={setName}
					placeholder="Name"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<View style={Styles.divider} />
				<TextInput
					style={Styles.input}
					value={lobbyId}
					onChangeText={setLobbyId}
					placeholder="Lobby ID"
					onSubmitEditing={Keyboard.dismiss}
				/>
			</View>
			<View style={Styles.buttonContainer}>
				<Button
					title="Compartir LobbyID"
					color="grey"
					onPress={onSharePress}
				/>
				<Button
					title={isExistingGame ? 'Join Game' : 'New Game'}
					color={isExistingGame ? 'green' : '#63C132'}
					onPress={handleGoToLobby}
				/>
			</View>
		</SafeAreaView>
	)
}
