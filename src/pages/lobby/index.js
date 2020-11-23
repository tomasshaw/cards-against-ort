import { StatusBar } from 'expo-status-bar'
import React, { useContext, useState, useEffect} from 'react'
import { SafeAreaView, Share, Button, Text, View } from 'react-native'
import Styles from '../../components/styles'
import { ListItem } from 'react-native-elements'
import SocketContext from '../../global/context/index'


export default function Lobby({ navigation, route }) {
	const socket = useContext(SocketContext);
	const { name } = route.params;
	const [room, setRoom] = useState('')
	const [playersList, setPlayersList] = useState([])

	console.log(playersList)
	const onSharePress = () => Share.share(shareOptions)
		
	const shareOptions = {
		message:`Hola! Te estoy invitando a jugar a CAO. Unite a la sala ${room.id}`,
	}

	useEffect(() => {
		socket.on('playersList', players => {
		  	setPlayersList(players);
		});
	  	socket.on('joinRoom', room => {
			setRoom(room)
		})
	});

	const isValidGame = () => {
		if (playersList.length > 0) {
			return true
		}
	}

	const handleGoToGame = () => {
		socket.emit('newRound', room.id)
		console.log('log desde lobby')
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
					#{room.id}
				</Text>
			</View>

			<View style={Styles.playersContainer}>
				{playersList.map((player, i) => (
					<ListItem key={i} containerStyle={Styles.blackBg}>
						<ListItem.Title>
							<Text style={[Styles.importantText, Styles.greyText]}>
								Jugador {i + 1}:
							</Text>
						</ListItem.Title>
						<ListItem.Subtitle>
							<Text style={[Styles.importantText, Styles.whiteText]}>
								{player.name}
							</Text>
						</ListItem.Subtitle>
					</ListItem>
				))}
			</View>
			<View style={Styles.buttonContainer}>
				<Button
					title="Compartir LobbyID"
					color="grey"
					onPress={onSharePress}
				/>
				<Button
					title="Play now"
					disabled = { isValidGame() ? false : true}
					color= 'green'
					onPress={handleGoToGame}
				/>
			</View>
		</SafeAreaView>
	)
}
