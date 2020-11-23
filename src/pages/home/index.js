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


export default function Home({ navigation }) {
	const socket = useContext(SocketContext)
	const [name, setName] = useState('')
	const [roomId, setRoomId] = useState('')
	const [rooms, setRooms] = useState([])
	const [validRoom, setValidRoom] = useState(true)
	console.log(rooms)
	
	useEffect(() => {
		socket.on('getAllRooms', rooms => {
		  	setRooms(rooms);
		});
	});

	useEffect(() => {
		setValidRoom(rooms.some(e => e === roomId))
	});
	
	const isValidRoom = (roomId) => {		
		console.log(validRoom)
		return validRoom
	}


	const handleGoToLobby = () => {
		socket.emit('newConnection', name, roomId);
		navigation.navigate('Lobby', name, roomId)
	}


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
			<Text style={Styles.whiteText}>Nombre: </Text>
				<TextInput
					style={Styles.input}
					value={name}
					onChangeText={setName}
					placeholder="Nombre"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<View style={Styles.divider} />
				<View style={Styles.spacer} />
				<Text style={Styles.whiteText}>Si tenes numero de sala, ingresalo aqui:</Text>
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

			<Text style={Styles.whiteText}>Si no, crea una nueva sala:</Text>
				<Button
					title='Crear sala'
					color='green' 
					onPress={handleGoToLobby}
				/>
			</View>
		</SafeAreaView>
	)
}
