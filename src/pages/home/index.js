import React, { useState } from 'react'
import {
	Button,
	Text,
	View,
	TextInput,
	Image,
	StatusBar,
	Share,
} from 'react-native'
import Styles from '../../components/styles'
import caoLogo from '../../../assets/icon.png'
import { Divider } from 'react-native-elements'

export default function Home({ navigation }) {
	const [name, setName] = useState('')
	const [lobbyId, setLobbyId] = useState('')
	const isExistingGame = lobbyId.length > 2

	const handleGotToLobby = () => {
		navigation.navigate('Lobby', { name, lobbyId })
	}
	const shareOptions = {
		message: 'Hola! Te estoy invitando a jugar a CAO.',
		url: 'cao://app/lobbyId'
	}
	const onSharePress = () => Share.share(shareOptions)
	
	return (
		<>
			<StatusBar
				//barStyle="light-content"
				//backgroundColor="#6a51ae"
			/>
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
				<View style={Styles.spacer} />
				<View style={Styles.newGameInfoContainer}>
					<TextInput
						style={Styles.input}
						value={name}
						onChangeText={setName}
						placeholder="Name"
					/>
					<View style={Styles.divider} />
					<TextInput
						style={Styles.input}
						value={lobbyId}
						onChangeText={setLobbyId}
						placeholder="Lobby ID"
					/>
					<View style={Styles.spacer} />
					<Button
						title= 'Compartir LobbyID'
						onPress= {onSharePress}
						color='grey'
					/>
					<View style={Styles.spacer} />
					<Button
						title={isExistingGame ? 'Join Game' : 'New Game'}
						color={isExistingGame ? 'green' : '#63C132'}
						onPress={handleGotToLobby}
					/>
					<View style={Styles.spacer} />
					
				</View>
			</View>
		</>
	)
}
