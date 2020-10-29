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
	const [lobbyId, setLobbyId] = useState('')
	const isExistingGame = lobbyId.length > 2


	useEffect(() => {
		const socket = io(ENDPOINT, {      
			transports: ['websocket']});
		socket.connect();
		socket.on('connect', () => {
			console.log("Conectado desde front")
		})
		socket.on('message', message => {
			console.log(message)
		})
	  }, []);

	const handleGotToGame = () => {
		navigation.navigate('About', { name })
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
						value={lobbyId}
						onChangeText={setLobbyId}
						placeholder="Lobby ID"
					/>

					<View style={Styles.spacer} />

					<Button
						title={isExistingGame ? 'Join Game' : 'New Game'}
						color={isExistingGame ? 'green' : '#63C132'}
						onPress={handleGotToGame}
					/>
				</View>
			</View>
		</>
	)
}
