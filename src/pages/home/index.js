import React, { useState } from 'react'
//import { Button } from 'react-native-elements';
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

export default function Home({ navigation }) {
	const [name, setName] = useState('')
	const [lobbyId, setLobbyId] = useState('')
	const isExistingGame = lobbyId.length > 2

	const handleGotToGame = () => {
		navigation.navigate('Lobby', { name })
	}

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
						<Text style={[Styles.white, Styles.mainText]}>
							{'Cards \nAgainst \nOrt'}
						</Text>
					</View>
				</View>
				<View style={Styles.spacer}></View>

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
						title={isExistingGame ? 'Join Game' : 'New Game'}
						color={isExistingGame ? 'green' : '#63C132'}
						onPress={handleGotToGame}
						borderColor= 'green'
						
					/>
				</View>
			</View>
		</>
	)
}
