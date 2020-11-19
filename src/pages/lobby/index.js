import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, Button, Text, View } from 'react-native'
import Styles from '../../components/styles'
import { ListItem } from 'react-native-elements'

export default function Lobby({ navigation, route }) {
	const { name } = route.params || { name: 'Invitado' }
	const { lobbyId } = route.params

	const list = [
		{
			nameP: 'Pepe',
		},
		{
			nameP: 'Coco',
		},
		{
			nameP: name,
		},
	]

	const isValidGame = list => {
		if (list.length > 2) {
			return true
		}
	}

	const handleGotToGame = () => {
		navigation.navigate('Game')
	}

	return (
		<SafeAreaView style={Styles.container}>
			<StatusBar style="none" />
			<View style={Styles.titleLobbyContainer}>
				<Text style={[Styles.whiteText, Styles.mainText]}>
					Hola {name}
					{'\n'}
				</Text>
				<Text style={[Styles.whiteText, Styles.importantText]}>
					Sala de juego
				</Text>
				<Text style={[Styles.greyText, Styles.importantText]}>
					#{lobbyId}
				</Text>
			</View>

			<View style={Styles.playersContainer}>
				{list.map((item, i) => (
					<ListItem key={i} containerStyle={Styles.blackBg}>
						<ListItem.Title>
							<Text style={[Styles.importantText, Styles.greyText]}>
								Jugador {i + 1}:
							</Text>
						</ListItem.Title>
						<ListItem.Subtitle>
							<Text style={[Styles.importantText, Styles.whiteText]}>
								{item.nameP}
							</Text>
						</ListItem.Subtitle>
					</ListItem>
				))}
			</View>
			<View style={Styles.buttonContainer}>
				<Button
					title="Play now"
					disabled={isValidGame(list) ? false : true}
					color="green"
					onPress={handleGotToGame}
				/>
			</View>
		</SafeAreaView>
	)
}
