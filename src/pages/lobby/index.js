import { StatusBar } from 'expo-status-bar'
import React, { useContext, useState, useEffect} from 'react'
import { SafeAreaView, Button, Text, View } from 'react-native'
import Styles from '../../components/styles'
import { ListItem } from 'react-native-elements'
import SocketContext from '../../global/context/index'
import roomsGlobal from '../../global/rooms'


export default function Lobby({ navigation, route }) {
	const context = useContext(SocketContext);
	const socket = context.socket;
	const { name } = route.params || { name: 'Invitado' }
	const { newRoom } = route.params 
	const { roomId } = context.roomId
	const [players, setPlayers] = useState([])
	
	console.log(newRoom)
	//console.log(socket)
	console.log(context)
	console.log(roomsGlobal)
	const onSharePress = () => Share.share(shareOptions)
		
	const shareOptions = {
		message:`Hola! Te estoy invitando a jugar a CAO. Unite a la sala ${roomId}`,
		//url: 'cao://app/lobbyId',
	}
	

	useEffect(() => {
		socket.on('getPlayers', player => {
			setPlayers(players => [...players, player])
		})
		return () => {
			socket.disconnect()
		}
	}, [])

	const isValidGame = players => {
		if (players.length > 2) {
			return true
		}
	}

	const handleGoToGame = () => {
		socket.emit('newRound', roomId)
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
					#{roomId}
				</Text>
			</View>

			<View style={Styles.playersContainer}>
				{players.map((player, i) => (
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
					disabled = { isValidGame(players) ? false : true}
					color= 'green'
					onPress={handleGoToGame}
				/>
			</View>
		</SafeAreaView>
	)
}
