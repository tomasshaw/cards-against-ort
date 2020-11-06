import React, { useState, useEffect } from 'react'
import {
	Button,
	Text,
	View,
	TextInput,
	Image,
	StatusBar,
} from 'react-native'
import Styles from '../../components/styles'
import caoLogo from '../../../assets/icon.png'
import io from 'socket.io-client'
const ENDPOINT = "http://127.0.0.1:4001";

export default function Home({ navigation }) {
	const [name, setName] = useState('')
	const [roomId, setRoomId] = useState('')
	// const isExistingGame = room.length > 2
	
	const socket = io(ENDPOINT, {      
		transports: ['websocket'], upgrade: false});  

	useEffect(() => {
		socket.connect();
	},[])
	
	// socket.on('message', message => {
	// 		console.log(message)});
	

	// const handleNewGame = () => {
	// 	socket.emit('create room', room, name)
	// 	navigation.navigate('About', { name, room })
	// }
	const handleJoinGame = () => {
		socket.emit('joinRoom', name, roomId)

		navigation.navigate('About', {socket, name, roomId})
	}


	return (
		<>
			<StatusBar
				barStyle="light-content"
				backgroundColor="#6a51ae"
				style={Styles.navbar}
			/>
			<View style={Styles.container}>
				<View style={Styles.titleLayoutContainer}>
					<View style={Styles.logoContainer}>
						<Image source={caoLogo} style={Styles.logoImage} />
					</View>
					<View style={Styles.nameTitleContainer}>
						<Text style={[Styles.white, Styles.mainText]}>
							{'Cards \n Against \n  Ort'}
						</Text>
					</View>
				</View>
				<View style={Styles.spacer}></View>

				<View style={Styles.newGameInfoContainer}>
					<TextInput
						style={Styles.whitebg}
						value={name}
						onChangeText={setName}
						placeholder="Name"
					/>
					<View style={Styles.divider} />
					<TextInput
						style={Styles.whitebg}
						value={roomId}
						onChangeText={value => setRoomId(value)}
						placeholder="Lobby ID"
					/>

					<View style={Styles.spacer} />

					{/* <Button
						title={'New Game'}
						color={'green'}
						onPress={handleJoinGame}
					/> */}
					<Button
						title={'Join Game'}
						color={'green'}
						onPress={handleJoinGame}
					/>
				</View>
			</View>
		</>
	)
}
