import React, { useState, useEffect, useContext } from 'react'
import {
	SafeAreaView,
	Button,
	Text,
	View,
	TextInput,
	Image,
	Keyboard,
} from 'react-native'
import Styles from '../../components/styles'
import caoLogo from '../../../assets/icon.png'
import SocketContext from '../../global/context/index'

const createUID = () => {
	return "room-" + Math.floor(Math.random() * 999999);
}

export default function Home({ navigation }) {
	const socket = useContext(SocketContext)
	const UID = createUID();
	const [name, setName] = useState('')
	const [roomId, setRoomId] = useState('')
	console.log(socket)

	useEffect(() =>{
		setRoomId(UID)
	}, []) 
	
	 const isValidRoom = roomId => {
		 //rooms.some(rooms.find(e => e === roomId))
		 true
	 };

	const handleGoToLobby = () => {
		navigation.navigate('Lobby', {newRoom, name, roomId } )
	}

	const createAndNavigateToRoom = () => {
  		socket.emit('createRoomAndGo', roomId, name);
		navigation.navigate('Lobby', roomId, name)
	}


	useEffect(() => {
		socket.connect();
	},[])

	// socket.on('message', message => {
	// 		console.log(message)});

	// const handleNewGame = () => {
	// 	socket.emit('create room', room, name)
	// 	navigation.navigate('About', { name, room })
	//



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
			<Text sytle={Styles.whiteText}>Nombre: </Text>
				<TextInput
					style={Styles.input}
					value={name}
					onChangeText={setName}
					placeholder="Nombre"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<View style={Styles.divider} />
				<View style={Styles.spacer} />
				<Text sytle={Styles.whiteText}>Si tenes numero de sala, ingresalo aqui:</Text>
				<TextInput
					style={Styles.input}
					value={roomId}
					onChangeText={setRoomId}
					placeholder="Room ID"
					onSubmitEditing={Keyboard.dismiss}
				/>
			
			</View>
			<View style={Styles.buttonContainer}>
				<Button
					title='Unirme a la sala'
					disabled= {isValidRoom(roomId)? false : true}
					color='green' 
					onPress={handleGoToLobby}
				/>

			<Text sytle={Styles.whiteText}>Si no, crea una nueva sala:</Text>
				<Button
					title='Crear sala'
					color='green' 
					onPress={createAndNavigateToRoom}
				/>
			</View>
		</SafeAreaView>
	)
}
