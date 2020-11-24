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
	const [rooms, setRooms] = useState([])
	const [validRoom, setValidRoom] = useState(false)
	
	console.log(socket); 

	useEffect(() => {
		socket.on('getAllRooms', rooms => {
			  setRooms(rooms);
			  if(rooms.some(e => e.id === roomId)){
					setValidRoom(isValid);
			  }
		});
	});

	const handleGoToLobby = () => {
		socket.emit('newConnection', name, roomId);
		navigation.navigate('Lobby', {name})
	};


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
				<TextInput
					style={Styles.input}
					value={name}
					onChangeText={setName}
					placeholder="Nombre"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<Text style={Styles.inputText}>Si tenés un número de sala, ingrésalo aquí:</Text>
				<TextInput
					style={Styles.input}
					value={roomId}
					onChangeText={setRoomId}
					placeholder="Room ID"
					onSubmitEditing={Keyboard.dismiss}
				/>
				<Button
					style= {Styles.button}
					title='Unirme a la sala'
					disabled= {validRoom? false : true}
					color='green' 
					onPress={handleGoToLobby}
				/>
				<Text style={Styles.inputText}>Si no, crea una nueva sala:</Text>
				<Button
					style= {Styles.button}
					title='Crear sala'
					color='green' 
					onPress={handleGoToLobby}
				/>
			</View>
		</View>
	)
}
