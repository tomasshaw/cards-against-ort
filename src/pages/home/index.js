import React, { useState, useEffect, useContext } from 'react'
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
import roomsGlobal from '../../global/rooms'
import rooms from '../../../../../cardsback/backend-cardsagainst/utils/rooms'
import {createRoom} from '../../../../../cardsback/backend-cardsagainst/utils/rooms'
import {createPlayer} from '../../../../../cardsback/backend-cardsagainst/assets/gameLogic'

const createUID = () => {
	return "room-" + Math.floor(Math.random() * 999999);
}

export default function Home({ navigation }) {
	const context = useContext(SocketContext)
	const socket = context.socket;
	const UID = createUID();
	const [roomsFront, setRoomsFront] = useState(rooms)
	const [name, setName] = useState('')
	const [roomId, setRoomId] = useState('')
	context.roomId = roomId;
	console.log(roomId);


	useEffect(() =>{
		socket.connect()
	}, []) 


	useEffect(() =>{
		setRoomId(UID)
	}, []) 
	
	 const isValidRoom = roomId => {
		 //rooms.some(rooms.find(e => e === roomId))
		 true
	 };
	
	console.log(socket)


	const handleGoToLobby = () => {
		//socket.emit('joinRoom', name, roomId)
		const newRoom = createRoom(roomId)
		const player = createPlayer(socket.id)
		newRoom.players.push(player);
		console.log(newRoom)
		console.log(roomsFront)
		navigation.navigate('Lobby', { name, newRoom})
	}


	// // useEffect(() => {
	// // 	socket.connect();
	// // },[])

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
					placeholder="Name"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<View style={Styles.divider} />
				<View style={Styles.spacer} />
				<Text sytle={Styles.whiteText}>Si tenes numero de sala, ingresalo aqui:</Text>
				<TextInput
					style={Styles.input}
					value={roomId}
					onChangeText={setRoomId}
					placeholder="Lobby ID"
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
					onPress={handleGoToLobby}
				/>
			</View>
		</SafeAreaView>
	)
}
